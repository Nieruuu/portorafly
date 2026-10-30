import type { Skill } from '../content/skills';
export function SkillIcon({ skill }: { skill: Skill }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={skill.path} /></svg>;
}
