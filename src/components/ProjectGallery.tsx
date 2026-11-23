import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { projects, type Project } from '../content/projects';
import { skills } from '../content/skills';
import { SkillIcon } from './SkillIcon';
import { ProjectSiteLink } from './ProjectSiteLink';
import './project-gallery.css';

const visibleProjects = projects.filter(project => project.visibility !== 'pending');

interface GalleryProps {
  motion: boolean;
  openProject: (project: Project) => void;
  renderVisual: (project: Project) => ReactNode;
}

export function ProjectGallery({ motion, openProject, renderVisual }: GalleryProps) {
  const grid = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!motion || !grid.current || !('IntersectionObserver' in window)) return;
    const cards = grid.current.querySelectorAll<HTMLElement>('.gallery-card');
    // Each column crosses its own scroll boundary, even when both cards share a row.
    const observers = [8, 96].map(inset => new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const card = entry.target as HTMLElement;
        if (card.dataset.reveal === 'pending') card.dataset.reveal = 'visible';
        observer.unobserve(card);
      }
    }, { rootMargin: `0px 0px -${inset}px 0px` }));

    cards.forEach((card, index) => {
      if (card.getBoundingClientRect().top < 0) return;
      card.dataset.reveal = 'pending';
      observers[index % observers.length].observe(card);
    });
    return () => {
      observers.forEach(observer => observer.disconnect());
      cards.forEach(card => { delete card.dataset.reveal; });
    };
  }, [motion]);

  return (
    <section className="project-gallery" id="projects" aria-labelledby="gallery-heading">
      <div className="wrap">
        <h2 id="gallery-heading">Proyek pilihan</h2>
        <div ref={grid} className="gallery-grid">
          {visibleProjects.map(project => (
            <article className="gallery-card" key={project.id} style={{ '--project-color': project.color } as CSSProperties}
              onFocusCapture={event => { delete event.currentTarget.dataset.reveal; }}>
              <div className="gallery-preview">
                <div className="gallery-art">{renderVisual(project)}</div>
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
          ))}
        </div>
        <a className="gallery-next" href="#skills">Lihat keahlian <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
