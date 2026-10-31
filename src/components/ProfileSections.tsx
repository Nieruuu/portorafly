import { site } from '../content/site';
import { experiences } from '../content/experiences';

function ContactArrow() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>;
}

export function AboutSection() {
  const initials = site.name.split(' ').map(part => part[0]).slice(0, 2).join('');
  return <section className="about-section profile-section" id="about" aria-labelledby="about-heading">
    <div className="wrap profile-layout">
      <div className="profile-intro"><p className="section-label">Tentang saya</p><h2 id="about-heading">{site.aboutHeading.map(line => <span key={line}>{line}</span>)}</h2>
        <div className="profile-object" aria-hidden="true"><div className="profile-backplate" /><div className="profile-monogram">{initials}<span>Always building.</span></div><span className="profile-sticker">Curiosity<br />in progress.</span><div className="profile-orbit" /></div>
        <p className="profile-name">{site.name}<span>Developer & problem solver</span></p>
        <div className="profile-focus">{site.focusAreas.map(area => <span key={area}>{area}</span>)}</div>
      </div>
      <div className="profile-story"><p className="profile-lead">{site.about}</p><p>{site.approach}</p>
        <div className="profile-experience-heading"><h3>Tempat saya bertumbuh.</h3><span aria-hidden="true">↙</span></div>
        <div className="profile-timeline">{experiences.map(exp => <article key={`${exp.company}-${exp.role}-${exp.period}`}>
          <span className="profile-timeline-dot" aria-hidden="true" /><p className="profile-period">{exp.period}</p><div className="profile-experience-card"><h4>{exp.role}</h4><p className="profile-company">{exp.company}</p><p>{exp.description}</p></div>
        </article>)}</div>
      </div>
    </div>
  </section>;
}

export function ContactSection() {
  return <section className="contact-section contact-poster" id="contact" aria-labelledby="contact-heading">
    <div className="wrap">
      <div className="contact-poster-top"><p className="section-label">Ayo terhubung</p><span>A good conversation is a good start.</span></div>
      <div className="contact-poster-layout"><div className="contact-poster-copy"><h2 id="contact-heading">{site.contactTitle}</h2><p>{site.contactDescription}</p><a className="contact-email" href={`mailto:${site.email}`}>{site.email}<ContactArrow /></a></div>
        <a className="contact-envelope" href={`mailto:${site.email}`} aria-label="Kirim email ke Rafly"><div className="envelope-paper" aria-hidden="true"><span>To: {site.shortName}</span><strong>Let’s make<br />it happen.</strong><div className="paper-rule" /><div className="paper-rule short-rule" /></div><div className="envelope-body" aria-hidden="true"><span>Say hello.</span></div><span className="contact-stamp" aria-hidden="true"><ContactArrow /></span></a>
      </div>
      <div className="contact-poster-bottom"><span>{site.role}</span><div>{site.links.map(link => <a href={link.url} key={link.label} target="_blank" rel="noreferrer">{link.label}<ContactArrow /></a>)}</div></div>
    </div>
  </section>;
}
