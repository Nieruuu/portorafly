import { useState, type CSSProperties } from 'react';
import { skills } from '../content/skills';
import { projects, type Project } from '../content/projects';
import { site } from '../content/site';
import { SkillIcon } from './SkillIcon';

export function SkillsWorkbench({ openProject }: { openProject: (project: Project) => void }) {
  const [group, setGroup] = useState('Semua');
  const [activeId, setActiveId] = useState('laravel');
  const filtered = skills.filter(skill => group === 'Semua' || skill.group === group);
  const selected = filtered.find(skill => skill.id === activeId) ?? filtered[0];
  const related = selected ? projects.filter(project => project.visibility !== 'pending' && project.skills.includes(selected.id)) : [];

  return <section className="skills-section workshop-section" id="skills" aria-labelledby="skills-heading">
    <div className="wrap workshop-layout">
      <div className="workshop-intro">
        <p className="section-label">Di balik setiap project</p>
        <h2 id="skills-heading">{site.skillsHeading.map(line => <span key={line}>{line}</span>)}</h2>
        <p>Dari antarmuka sampai deployment. Ini alat yang saya pakai untuk menghubungkan semuanya.</p>
        <div className="workshop-note"><span aria-hidden="true">↳</span><p>Pilih sebuah teknologi untuk melihat project yang menggunakannya.</p></div>
        <div className="workshop-legend" aria-hidden="true"><span>Interface</span><i /><span>Logic</span><i /><span>Delivery</span></div>
      </div>
      <div className="workbench">
        <div className="workbench-top"><span>Developer’s workbench</span><span>{filtered.length} tools</span></div>
        <div className="skill-filters" role="group" aria-label="Filter kelompok teknologi">
          {['Semua', 'Frontend', 'Backend & data', 'DevOps & tools'].map(category => <button key={category} aria-pressed={group === category} onClick={() => setGroup(category)}>{category}</button>)}
        </div>
        <p className="sr-only" role="status">{filtered.length} teknologi ditampilkan.</p>
        <ul className="workbench-grid">{filtered.map((skill, i) => <li key={skill.id}>
          <button className="workbench-tool" aria-pressed={selected?.id === skill.id} onClick={() => setActiveId(skill.id)} onFocus={() => setActiveId(skill.id)} style={{ '--tile-color': skill.color, '--tile-angle': `${(i % 3 - 1) * 5}deg` } as CSSProperties}>
            <span className="workbench-badge"><SkillIcon skill={skill} /></span><span>{skill.name}</span>
          </button>
        </li>)}</ul>
        {selected ? <div className="workbench-detail">
          <div className="workbench-selected"><span className="selected-logo" style={{ background: selected.color }}><SkillIcon skill={selected} /></span><div><span>{selected.group}</span><h3>{selected.name}</h3></div></div>
          {related.length ? <div className="workbench-projects"><p>Dipakai dalam</p><div>{related.map(project => <button key={project.id} onClick={() => openProject(project)}>{project.title}<span aria-hidden="true">↗</span></button>)}</div></div> : <p className="workbench-learning">Bagian dari toolkit yang saya pelajari.</p>}
        </div> : <p>Belum ada teknologi pada kelompok ini.</p>}
      </div>
    </div>
  </section>;
}
