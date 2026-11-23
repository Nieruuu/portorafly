import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, type Project } from '../content/projects';
import { skills } from '../content/skills';
import { SkillIcon } from './SkillIcon';
import { ProjectSiteLink } from './ProjectSiteLink';
import { ProjectMotionAccent } from './ProjectMotionAccent';
import './project-gallery.css';
import './project-motion.css';

const visibleProjects = projects.filter(project => project.visibility !== 'pending');

interface GalleryProps {
  motion: boolean;
  openProject: (project: Project) => void;
  renderVisual: (project: Project) => ReactNode;
}

export function ProjectGallery({ motion, openProject, renderVisual }: GalleryProps) {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);
  const [{ index, direction }, setSlide] = useState({ index: 0, direction: 'down' });
  const active = useRef(0);
  const last = visibleProjects.length - 1;
  const project = visibleProjects[index];

  useLayoutEffect(() => {
    const track = section.current;
    const viewport = stage.current;
    if (!track || !viewport || last < 1) return;
    // Start the first scene when the visitor reaches it, not when the page loads.
    const observer = motion && 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => viewport.toggleAttribute('data-onstage', entry.intersectionRatio >= 0.5), { threshold: 0.5 })
      : null;
    observer?.observe(viewport);
    const sync = (scroll: ScrollTrigger) => {
      const position = scroll.progress * last;
      const next = Math.round(position);
      if (motion) viewport.style.setProperty('--slide-travel', ((position - next) * 2).toFixed(3));
      if (next === active.current) return;
      setSlide({ index: next, direction: next < active.current ? 'up' : 'down' });
      active.current = next;
    };
    const scroll = ScrollTrigger.create({
      trigger: track,
      start: () => `top ${getComputedStyle(viewport).top}`,
      end: () => `+=${track.offsetHeight - viewport.offsetHeight}`,
      onUpdate: sync,
      onRefresh: sync,
    });
    trigger.current = scroll;
    return () => {
      scroll.kill();
      trigger.current = null;
      observer?.disconnect();
      viewport.removeAttribute('data-onstage');
      viewport.style.removeProperty('--slide-travel');
    };
  }, [last, motion]);

  function goTo(next: number) {
    const scroll = trigger.current;
    if (!scroll || next < 0 || next > last) return;
    const top = scroll.start + (scroll.end - scroll.start) * next / last;
    window.scrollTo({ top, behavior: motion ? 'smooth' : 'instant' });
  }

  if (!project) return null;
  return (
    <section ref={section} className="project-gallery" id="projects" aria-labelledby="gallery-heading"
      style={{ '--steps': last } as CSSProperties}>
      <div ref={stage} className="gallery-stage wrap">
        <div className="gallery-heading-row">
          <h2 id="gallery-heading">Proyek pilihan</h2>
          <div className="gallery-controls">
            <button type="button" aria-label="Proyek sebelumnya" aria-disabled={index === 0} onClick={() => goTo(index - 1)}>↑</button>
            <span role="status" aria-atomic="true">{index + 1} / {visibleProjects.length}<span className="sr-only"> — {project.title}</span></span>
            <button type="button" aria-label="Proyek berikutnya" aria-disabled={index === last} onClick={() => goTo(index + 1)}>↓</button>
          </div>
        </div>
        <div className="gallery-panel" key={project.id}>
          <article className="gallery-card" data-direction={direction}
            style={{ '--project-color': project.color } as CSSProperties}>
            <div className="gallery-preview">
              <div className="gallery-camera">
                <div className="gallery-art">{renderVisual(project)}</div>
                <ProjectMotionAccent projectId={project.id} />
              </div>
              {project.id === 'taxation-map' && <span className="preview-caption">Tampilan versi sebelumnya</span>}
            </div>
            <div className="gallery-copy">
              <p className="gallery-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="gallery-summary">{project.description}</p>
              <ul className="gallery-technologies" aria-label="Teknologi proyek">
                {project.skills.map(id => {
                  const skill = skills.find(item => item.id === id);
                  return skill && <li key={id}><SkillIcon skill={skill} />{skill.name}</li>;
                })}
                {project.tags?.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
            <div className="gallery-card-footer">
              <button type="button" className="gallery-detail" aria-haspopup="dialog"
                aria-label={`Lihat detail ${project.title}`} onClick={() => openProject(project)}>
                Lihat detail <span aria-hidden="true">→</span>
              </button>
              <ProjectSiteLink project={project} />
              {project.visibility === 'confidential' && <span className="gallery-private">Kode internal</span>}
            </div>
          </article>
        </div>
        <div className="gallery-footer">
          <span>Gulir untuk berganti proyek</span>
          <a className="gallery-next" href="#skills">Lihat keahlian <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  );
}
