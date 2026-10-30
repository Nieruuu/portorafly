import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, type Project } from '../content/projects';
import { skills } from '../content/skills';
import { SkillIcon } from './SkillIcon';

gsap.registerPlugin(ScrollTrigger);
const visibleProjects = projects.filter(project => project.visibility !== 'pending');

interface GalleryProps {
  motion: boolean;
  openProject: (project: Project) => void;
  renderVisual: (project: Project) => ReactNode;
}

export function ProjectGallery({ motion, openProject, renderVisual }: GalleryProps) {
  const host = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const jump = useRef<(index: number) => void>(() => {});
  const active = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const section = host.current;
    const rail = track.current;
    if (!section || !rail) return;
    const cards = Array.from(rail.querySelectorAll<HTMLElement>('.gallery-card'));
    const fallbackJump = (index: number) => cards[index]?.scrollIntoView({ behavior: 'auto', block: 'center' });
    jump.current = fallbackJump;
    if (!motion || cards.length < 2) return;

    const media = gsap.matchMedia();
    media.add('(min-width: 900px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)', () => {
      section.classList.add('gallery-horizontal');
      const viewport = section.querySelector<HTMLElement>('.gallery-viewport')!;
      const progressBar = section.querySelector('.gallery-progress-fill');
      const watermark = section.querySelector('.gallery-watermark');
      const setX = gsap.quickSetter(rail, 'x', 'px');
      const setBar = gsap.quickSetter(progressBar, 'scaleX');
      const setWatermark = gsap.quickSetter(watermark, 'x', 'px');
      const setters = cards.map(card => ({
        rotate: gsap.quickSetter(card, 'rotationY', 'deg'),
        scale: gsap.quickSetter(card, 'scale'),
        y: gsap.quickSetter(card, 'y', 'px'),
      }));
      let travel = 0;
      let centers: number[] = [];
      const playhead = { progress: 0 };
      const paint = () => {
        const offset = travel * playhead.progress;
        setX(-offset);
        setBar(playhead.progress);
        setWatermark(offset * 0.08);
        centers.forEach((center, i) => {
          const relative = Math.max(-1, Math.min(1, (center - offset - viewport.clientWidth / 2) / viewport.clientWidth));
          setters[i].rotate(-relative * 12);
          setters[i].scale(1 - Math.abs(relative) * 0.08);
          setters[i].y(Math.abs(relative) * 24);
        });
        const next = Math.round(playhead.progress * (cards.length - 1));
        if (active.current !== next) { active.current = next; setActiveIndex(next); }
      };
      const measure = () => {
        travel = Math.max(0, rail.scrollWidth - viewport.clientWidth);
        centers = cards.map(card => card.offsetLeft + card.offsetWidth / 2);
        paint();
      };
      measure();
      const tween = gsap.to(playhead, {
        progress: 1, ease: 'none', onUpdate: paint,
        scrollTrigger: {
          id: 'project-gallery', trigger: section, start: 'top top',
          end: () => `+=${Math.max(travel * 0.8, innerHeight * 2)}`,
          pin: true, scrub: 0.65, anticipatePin: 1, invalidateOnRefresh: true,
          onRefresh: measure,
        },
      });
      const trigger = tween.scrollTrigger!;
      jump.current = (index: number) => {
        const destination = Math.max(0, Math.min(cards.length - 1, index));
        window.scrollTo({ top: trigger.start + (trigger.end - trigger.start) * destination / (cards.length - 1) + (destination === 0 ? 1 : -1), behavior: 'smooth' });
      };
      // Native Tab navigation must reveal the card even when it is off the rail.
      const revealFocusedCard = (event: FocusEvent) => {
        const index = cards.findIndex(card => card.contains(event.target as Node));
        if (index !== -1) jump.current(index);
      };
      rail.addEventListener('focusin', revealFocusedCard);
      return () => {
        rail.removeEventListener('focusin', revealFocusedCard);
        section.classList.remove('gallery-horizontal');
        gsap.set([rail, ...cards, watermark, progressBar], { clearProps: 'transform' });
        jump.current = fallbackJump;
      };
    });

    media.add('(max-width: 899px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)', () => {
      section.classList.add('gallery-stacked');
      cards.slice(0, -1).forEach((card, i) => {
        gsap.to(card, { scale: 0.94, rotate: i % 2 ? 1.5 : -1.5, ease: 'none',
          scrollTrigger: { trigger: cards[i + 1], start: 'top 85%', end: 'top 18%', scrub: true } });
      });
      return () => section.classList.remove('gallery-stacked');
    });
    let alive = true;
    document.fonts.ready.then(() => { if (alive) ScrollTrigger.refresh(); });
    return () => { alive = false; media.revert(); };
  }, [motion]);

  return <section ref={host} className="project-gallery" id="projects" aria-labelledby="gallery-heading">
    <div className="gallery-watermark" aria-hidden="true">Selected work</div>
    <div className="gallery-heading wrap">
      <div><p className="section-label">Pilihan karya</p><h2 id="gallery-heading">Ide yang jadi nyata.</h2></div>
      <p className="gallery-instruction"><span className="horizontal-instruction">Scroll ke bawah, jelajahi ke samping.</span><span className="vertical-instruction">Jelajahi project dan cerita di baliknya.</span><span>Web development / Geospatial / Automation</span></p>
    </div>
    <div className="gallery-viewport">
      <div className="gallery-track" ref={track}>
        {visibleProjects.map((project, i) => <article className={`gallery-card project-${project.id}`} key={project.id} style={{ '--project-color': project.color, '--stack-index': i } as CSSProperties} aria-labelledby={`project-${project.id}-title`}>
          <button className="project-media" onClick={() => openProject(project)} aria-label={`Lihat detail ${project.title}`}>
            {renderVisual(project)}<span className="media-open" aria-hidden="true">↗</span>
          </button>
          <div className="gallery-card-copy">
            <div className="project-meta"><span>{project.category}</span>{project.visibility === 'confidential' && <span className="private-label">Confidential</span>}</div>
            <h3 id={`project-${project.id}-title`}>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.id === 'taxation-map' && <p className="image-note">Preview dari versi sebelumnya.</p>}
            <div className="project-tags">{project.skills.map(id => { const skill = skills.find(s => s.id === id); return skill ? <span key={id}><SkillIcon skill={skill} />{skill.name}</span> : null; })}{project.tags?.map(tag => <span key={tag}>{tag}</span>)}</div>
            <button className="gallery-detail" onClick={() => openProject(project)}>Tentang project <span aria-hidden="true">↗</span></button>
          </div>
        </article>)}
      </div>
    </div>
    <div className="gallery-footer wrap">
      <div className="gallery-position"><span>{String(activeIndex + 1).padStart(2, '0')}</span><span className="gallery-progress"><span className="gallery-progress-fill" /></span><span>{String(visibleProjects.length).padStart(2, '0')}</span></div>
      <div className="gallery-dots" aria-label="Pilih project">{visibleProjects.map((project, i) => <button key={project.id} aria-label={`Tampilkan ${project.title}`} aria-current={activeIndex === i ? 'true' : undefined} onClick={() => jump.current(i)}><span /></button>)}</div>
      <div className="gallery-actions"><button aria-label="Project sebelumnya" disabled={activeIndex === 0} onClick={() => jump.current(active.current - 1)}>←</button><button aria-label="Project berikutnya" disabled={activeIndex === visibleProjects.length - 1} onClick={() => jump.current(active.current + 1)}>→</button><a href="#skills">Lanjut ke skills <span aria-hidden="true">↘</span></a></div>
    </div>
  </section>;
}
