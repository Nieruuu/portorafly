import type { Project } from '../content/projects';

export function ProjectSiteLink({ project }: { project: Project }) {
  if (!project.live) return null;

  return (
    <a className="button project-site-link" href={project.live} target="_blank" rel="noopener noreferrer"
      aria-label={`Kunjungi situs ${project.title} (tab baru)`}>
      Kunjungi situs <span aria-hidden="true">↗</span>
    </a>
  );
}
