import './personal-projects.css';

export function PersonalProjects() {
  return (
    <section className="personal-projects" id="iseng" aria-labelledby="personal-heading">
      <div className="wrap personal-layout">
        <div>
          <h2 id="personal-heading">Proyek iseng</h2>
          <h3>Komplek Hari Bahagia</h3>
          <p>Aku bikin ini buat ulang tahun Epi yang ke-21. Kalau biasanya ucapan tinggal dibaca di chat, kali ini Epi bisa jalan-jalan dulu di komplek kecil yang kubuat. Ada surat buat dia di dalamnya.</p>
          <a className="button personal-link" href="https://hbdepi2.vercel.app/" target="_blank" rel="noreferrer nofollow">
            Main ke kompleknya <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="birthday-scene" aria-hidden="true">
          <div className="birthday-map">
            <div className="map-pond" />
            <div className="map-road" /><div className="map-road map-crossroad" />
            <div className="map-house house-mint" /><div className="map-house house-coral" /><div className="map-house house-yellow" />
            <div className="map-folds" />
          </div>
          <div className="birthday-note"><span>Untuk Epi</span><strong>Selamat ulang<br />tahun ke-21!</strong></div>
        </div>
      </div>
    </section>
  );
}
