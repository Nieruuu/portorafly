import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from 'react';
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
  const timeline = useRef<HTMLOListElement>(null);

  useLayoutEffect(() => {
    const list = timeline.current;
    if (!motion || !list) return;

    list.setAttribute('data-motion', '');
    const triggers = Array.from(list.querySelectorAll<HTMLElement>('.gallery-item'), item => {
      let furthest = Number(item.style.getPropertyValue('--line-fill'));
      const update = (scroll: ScrollTrigger) => {
        if (scroll.progress > 0) item.setAttribute('data-revealed', '');
        furthest = Math.max(furthest, scroll.progress);
        item.style.setProperty('--line-fill', furthest.toFixed(4));
        item.style.setProperty('--slide-travel', (scroll.progress * 2 - 1).toFixed(3));
      };
      return ScrollTrigger.create({
        trigger: item,
        start: 'top 90%',
        end: 'bottom 90%',
        onRefresh: update,
        onUpdate: update,
      });
    });
    return () => {
      triggers.forEach(trigger => trigger.kill());
      list.removeAttribute('data-motion');
    };
  }, [motion]);

  return (
    <section className="project-gallery" id="projects" aria-labelledby="gallery-heading">
      <div className="gallery-layout wrap">
        <h2 id="gallery-heading">Proyek pilihan</h2>
        <ol ref={timeline} className="gallery-timeline" role="list">
          {visibleProjects.map(project => (
            <li key={project.id} className="gallery-item" style={{ '--project-color': project.color } as CSSProperties}
              onFocusCapture={event => event.currentTarget.setAttribute('data-revealed', '')}>
              <span className="gallery-marker" aria-hidden="true" />
              <article className="gallery-card">
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
            </li>
          ))}
        </ol>
        <a className="gallery-next" href="#skills">Lihat keahlian <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
