import { siGithub, siWhatsapp } from 'simple-icons';

export const site = {
  name: 'Rafly Sugiarto', shortName: 'Rafly', role: 'Fullstack Developer & DevOps Enthusiast',
  headline: ['Aku bikin web', 'dan peta.'],
  intro: 'Waktu magang di Cartenz, aku mengerjakan peta untuk menandai objek pajak. Aku juga membuat aplikasi kasir untuk mencatat penjualan dan stok di Rafly Helm.',
  about: 'Aku kuliah Sistem Informasi di Universitas Bina Sarana Informatika. Aku mulai belajar web karena penasaran sama apa yang terjadi setelah kita klik sesuatu di layar.',
  approach: 'Di Cartenz aku pakai Laravel dan React buat mengerjakan Taxation Map. Di luar magang, salah satu yang kubuat adalah kasir untuk Rafly Helm. Dari situ aku belajar cara mencatat stok masuk dan keluar.',
  contactTitle: 'Mau ngobrol?',
  contactDescription: 'Kalau ada yang mau kamu tanyakan soal proyekku, atau ada kerjaan yang bisa kita garap bareng, kirim email aja.',
  skillsHeading: ['Yang kupakai', 'buat ngoding.'],
  aboutHeading: ['Sedikit', 'tentang aku.'],
  focusAreas: ['Web apps', 'Peta interaktif', 'Automation'],
  email: 'rafly23yoi@gmail.com',
  links: [
    {
      label: 'LinkedIn', url: 'https://linkedin.com/in/rafly-sugiarto',
      iconPath: 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.54V9H7.1zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z',
    },
    { label: 'GitHub', url: 'https://github.com/Nieruuu', iconPath: siGithub.path },
    { label: 'WhatsApp', url: 'https://wa.me/6289512263027', iconPath: siWhatsapp.path },
  ],
  navigation: [{ label: 'Karya', id: 'projects' }, { label: 'Skills', id: 'skills' }, { label: 'Tentang', id: 'about' }, { label: 'Kontak', id: 'contact' }],
};
