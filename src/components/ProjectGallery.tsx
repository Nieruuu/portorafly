import type { CSSProperties, ReactNode } from 'react';
import { projects, type Project } from '../content/projects';
import { skills } from '../content/skills';
import { SkillIcon } from './SkillIcon';
import { ProjectSiteLink } from './ProjectSiteLink';
import './project-gallery.css';

const visibleProjects = projects.filter(project => project.visibility !== 'pending');

interface GalleryProps {
  openProject: (project: Project) => void;
  renderVisual: (project: Project) => ReactNode;
}

export function ProjectGallery({ openProject, renderVisual }: GalleryProps) {
  return (
    <section className="project-gallery" id="projects" aria-labelledby="gallery-heading">
      <div className="wrap">
        <h2 id="gallery-heading">Proyek pilihan</h2>
        <div className="gallery-grid">
          {visibleProjects.map(project => (
            <article className="gallery-card" key={project.id} style={{ '--project-color': project.color } as CSSProperties}>
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
