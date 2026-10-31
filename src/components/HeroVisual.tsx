import { Component, lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import { skills } from '../content/skills';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { SkillIcon } from './SkillIcon';
const TechScene = lazy(() => import('./TechScene'));

class SceneBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function StaticBadges({ motion = false }: { motion?: boolean }) {
  const featured = skills.filter(s => s.featured);
  return <div className={`static-badges${motion ? ' badges-drifting' : ''}`} aria-hidden="true">{featured.map((skill, i) => {
    const angle = i / featured.length * Math.PI * 2 + 0.2;
    return <div className="clay-tile-position" key={skill.id} style={{ left: `${37 + Math.cos(angle) * 30}%`, top: `${38 - Math.sin(angle) * 30}%`, transform: `rotate(${Math.sin(i * 3) * 14}deg)` }}><div className="clay-tile" style={{ backgroundColor: skill.color, animationDelay: `${i * -0.8}s` }}><SkillIcon skill={skill} /></div></div>;
  })}<div className="static-plinth" /></div>;
}

export function HeroVisual({ motion = true }: { motion?: boolean }) {
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const narrow = useMediaQuery('(max-width: 600px)');
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [supported, setSupported] = useState(false);
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl2');
    setSupported(Boolean(context));
    context?.getExtension('WEBGL_lose_context')?.loseContext();
    const observer = new IntersectionObserver(entries => setVisible(entries[0].isIntersecting), { rootMargin: '100px' });
    if (host.current) observer.observe(host.current);
    return () => observer.disconnect();
  }, []);
  const animated = motion && supported && !reduced && !failed && visible && !narrow;
  const fallback = <StaticBadges motion={motion && !reduced && visible} />;
  return <div className="hero-art" ref={host}>
    <div className="art-caption"><span className="tiny-orbit" /> Tools of my trade</div>
    <div className="scene-shell" role="img" aria-label={`Komposisi badge clay: ${skills.filter(s => s.featured).map(s => s.name).join(', ')}`}>
      <SceneBoundary fallback={fallback}>
        {animated ? <Suspense fallback={fallback}><TechScene onFailure={() => setFailed(true)} /></Suspense> : fallback}
      </SceneBoundary>
    </div>
    <div className="art-bottom"><span>Ide kecil. Banyak kemungkinan.</span></div>
  </div>;
}
