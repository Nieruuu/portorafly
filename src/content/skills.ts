import { siLaravel, siReact, siTailwindcss, siDocker, siPython, siMysql, siOpenlayers, siPostman, siPhp, siJavascript, siTypescript, siHtml5, siCss, siCodeigniter, siLivewire, siGit, siGithubactions, siLinux } from 'simple-icons';

export interface Skill {
  id: string; name: string; group: 'Frontend' | 'Backend & data' | 'DevOps & tools';
  color: string; path: string; featured?: boolean;
}

// path uses the original Simple Icons brand silhouette, also shared by the 3D badge.
export const skills: Skill[] = [
  { id: 'laravel', name: 'Laravel', group: 'Backend & data', color: '#F77759', path: siLaravel.path, featured: true },
  { id: 'react', name: 'React', group: 'Frontend', color: '#A8D9EB', path: siReact.path, featured: true },
  { id: 'tailwind', name: 'Tailwind CSS', group: 'Frontend', color: '#B8DCDA', path: siTailwindcss.path, featured: true },
  { id: 'docker', name: 'Docker', group: 'DevOps & tools', color: '#8AAEF0', path: siDocker.path, featured: true },
  { id: 'python', name: 'Python', group: 'DevOps & tools', color: '#F1D884', path: siPython.path, featured: true },
  { id: 'mysql', name: 'MySQL', group: 'Backend & data', color: '#D9D5EB', path: siMysql.path, featured: true },
  { id: 'postman', name: 'Postman', group: 'DevOps & tools', color: '#F6B58D', path: siPostman.path, featured: true },
  { id: 'openlayers', name: 'OpenLayers', group: 'Frontend', color: '#D8EE91', path: siOpenlayers.path },
  { id: 'php', name: 'PHP', group: 'Backend & data', color: '#D9D5EB', path: siPhp.path },
  { id: 'javascript', name: 'JavaScript', group: 'Frontend', color: '#F1D884', path: siJavascript.path },
  { id: 'typescript', name: 'TypeScript', group: 'Frontend', color: '#A8D9EB', path: siTypescript.path },
  { id: 'html', name: 'HTML5', group: 'Frontend', color: '#F77759', path: siHtml5.path },
  { id: 'css', name: 'CSS', group: 'Frontend', color: '#8AAEF0', path: siCss.path },
  { id: 'codeigniter', name: 'CodeIgniter', group: 'Backend & data', color: '#F77759', path: siCodeigniter.path },
  { id: 'livewire', name: 'Livewire', group: 'Backend & data', color: '#D9D5EB', path: siLivewire.path },
  { id: 'git', name: 'Git', group: 'DevOps & tools', color: '#F77759', path: siGit.path },
  { id: 'github-actions', name: 'GitHub Actions', group: 'DevOps & tools', color: '#A8D9EB', path: siGithubactions.path },
  { id: 'linux', name: 'Linux', group: 'DevOps & tools', color: '#F1D884', path: siLinux.path },
];
