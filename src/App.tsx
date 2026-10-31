import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { site } from './content/site';
import { type Project } from './content/projects';
import { skills } from './content/skills';
import { HeroVisual } from './components/HeroVisual';
import { ProjectGallery } from './components/ProjectGallery';
import { useMediaQuery } from './hooks/useMediaQuery';
import { SkillsWorkbench } from './components/SkillsWorkbench';
import { AboutSection, ContactSection } from './components/ProfileSections';
import './motion.css';
import './sections.css';
gsap.registerPlugin(ScrollTrigger);

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-6-6 6 6-6 6'} /></svg>;
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) return <img src={project.image} alt={project.imageAlt} loading="lazy" width="1200" height="750" />;
  if (project.id === 'pos-inventory') return <div className="pos-visual" aria-label="Ringkasan modul POS Inventory, bukan screenshot aplikasi"><span className="pos-brand">Rafly Helm</span><strong>Penjualan bertemu<br />pengelolaan stok.</strong><div className="pos-modules"><span>Kasir<Arrow /></span><span>Inventory<Arrow /></span></div><span className="pos-caption">Ringkasan modul aplikasi</span></div>;
  return <div className="revishit-visual" aria-label="Ringkasan alur aplikasi Revishit">
    <div className="rev-brand">revishit</div>
    <div className="flow-board"><span>Alur aplikasi</span><strong>Langkah berikutnya,<br />lebih terarah.</strong>
      <div className="flow-step"><span className="flow-dot" />Pendaftaran <span>✓</span></div>
      <div className="flow-step"><span className="flow-dot" />Membership <span>✓</span></div>
      <div className="flow-step current"><span className="flow-dot" />Review dokumen <Arrow /></div>
    </div>
    <span className="rev-footnote">Member area & content management</span>
  </div>;
}

function ProjectDialog({ project, close }: { project: Project | null; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project) return;
    const element = dialog.current;
    element?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { element?.close(); document.body.style.overflow = previousOverflow; };
  }, [project]);
  return <dialog ref={dialog} className="project-dialog" aria-labelledby="dialog-title" onClose={close} onClick={e => { if (e.target === e.currentTarget) close(); }}>
    {project && <><button className="close-dialog" onClick={close} aria-label="Tutup detail project">×</button>
      <p className="section-label">{project.category}</p><h2 id="dialog-title">{project.title}</h2>
      <p>{project.description}</p><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
      <div className="project-tags">{project.skills.map(id => <span key={id}>{skills.find(s => s.id === id)?.name}</span>)}{project.tags?.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="dialog-links">{project.github && <a className="button primary" href={project.github} target="_blank" rel="noreferrer">Lihat repository <Arrow diagonal /></a>}{project.live && <a className="button secondary" href={project.live} target="_blank" rel="noreferrer">Buka website <Arrow diagonal /></a>}</div>
      {project.visibility === 'confidential' && <p className="confidential-note">Repository tidak dipublikasikan karena kerahasiaan perusahaan.</p>}
    </>}
  </dialog>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const motion = !reduced;
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!motion) return;
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.hero-copy > *', { y: 18, opacity: 0, stagger: 0.09, duration: 0.7, ease: 'power2.out' });
      gsap.to('.scroll-progress', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: true } });
      gsap.from('.workbench', { y: 38, rotation: 1.5, duration: 0.9, ease: 'power2.out', scrollTrigger: { trigger: '#skills', start: 'top 72%', once: true } });
      gsap.fromTo('.profile-monogram', { y: 22, rotation: -9 }, { y: -28, rotation: 3, ease: 'none', scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
      gsap.fromTo('.profile-sticker', { y: 15, rotation: 12 }, { y: -38, rotation: -4, ease: 'none', scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
      gsap.fromTo('.contact-envelope', { rotation: -10, y: 30 }, { rotation: 3, y: -12, ease: 'none', scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'bottom bottom', scrub: 0.8 } });
    });
    media.add('(min-width: 900px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)', () => {
      const hero = document.querySelector('#hero');
      hero?.classList.add('hero-journey');
      const timeline = gsap.timeline({
        onUpdate: () => window.dispatchEvent(new CustomEvent('portfolio:hero-progress', { detail: ScrollTrigger.getById('hero-journey')?.animation?.progress() ?? 0 })),
        scrollTrigger: {
        id: 'hero-journey', trigger: hero, start: 'top 88px', end: () => `+=${innerHeight * 0.85}`,
        pin: true, scrub: 0.7, anticipatePin: 1, invalidateOnRefresh: true, refreshPriority: 10,
      } });
      timeline.to('.hero-copy', { y: -70, scale: 0.93, autoAlpha: 0, duration: 0.65, ease: 'power1.in' }, 0)
        .fromTo('.hero-transition', { autoAlpha: 0, y: 80 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power2.out' }, 0.4)
        .to('.hero-art', { x: -30, scale: 1.08, duration: 1, ease: 'none' }, 0)
        .to('.hero-footer', { autoAlpha: 0, duration: 0.2 }, 0);
      return () => hero?.classList.remove('hero-journey');
    });
    const refresh = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => { cancelAnimationFrame(refresh); media.revert(); };
  }, [motion]);
  useEffect(() => {
    document.documentElement.classList.toggle('calm-motion', !motion);
    return () => document.documentElement.classList.remove('calm-motion');
  }, [motion]);
  useEffect(() => {
    if (!menuOpen) return;
    const escape = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMenuOpen(false); document.getElementById('menu-button')?.focus(); } };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [menuOpen]);
  return <div ref={root} className={motion ? 'motion-on' : 'motion-off'}>
    <a className="skip-link" href="#main">Lewati ke konten</a><div className="scroll-progress" />
    <header className="site-header"><a className="wordmark" href="#hero" aria-label={`${site.name}, beranda`}>rafly<span className="wordmark-dot">.</span></a>
      <button id="menu-button" className="menu-button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Tutup' : 'Menu'} <span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
      <nav id="site-nav" aria-label="Navigasi utama" className={menuOpen ? 'is-open' : ''}>{site.navigation.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}{item.id === 'contact' && <Arrow diagonal />}</a>)}</nav>
    </header>
    <main id="main">
      <section className="hero wrap" id="hero">
        <div className="hero-copy"><p className="hero-intro">Halo, saya {site.name}<span className="hello-mark" aria-hidden="true">✳</span></p>
          <h1>{site.headline.map(line => <span key={line}>{line}</span>)}</h1>
          <p className="hero-description">{site.intro}</p>
          <div className="hero-actions"><a className="button primary" href="#projects">Jelajahi karya <Arrow /></a><a className="text-link" href={`mailto:${site.email}`}>Mari ngobrol <Arrow diagonal /></a></div>
          <p className="hero-role">{site.role}</p>
        </div><div className="hero-transition" aria-hidden="true"><span>Dari tools,</span><span>jadi karya.</span><p>Scroll untuk masuk ke project <Arrow /></p></div><HeroVisual motion={motion} />
        <div className="hero-footer"><span>Web development / Geospatial / Automation</span><a href="#projects">Scroll untuk menjelajah <span aria-hidden="true">↓</span></a></div>
      </section>
      <ProjectGallery motion={motion} openProject={setSelectedProject} renderVisual={project => <ProjectVisual project={project} />} />
      <SkillsWorkbench openProject={setSelectedProject} />
      <AboutSection />
      <ContactSection />
    </main>
    <footer className="site-footer wrap"><a className="wordmark" href="#hero">rafly<span className="wordmark-dot">.</span></a><span>© {new Date().getFullYear()} {site.name}</span><a href="#hero">Kembali ke atas ↑</a></footer>
    <ProjectDialog project={selectedProject} close={() => setSelectedProject(null)} />
  </div>;
}
