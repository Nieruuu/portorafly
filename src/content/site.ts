import { siGithub, siWhatsapp } from 'simple-icons';

export const site = {
  name: 'Rafly Sugiarto', shortName: 'Rafly', role: 'Fullstack Developer',
  headline: ['Fullstack', 'dan DevOps'],
  intro: 'Saya membangun aplikasi web dengan Laravel dan React. Saya juga tertarik pada DevOps, terutama cara mengotomatiskan rilis agar setiap versi aplikasi dapat diterapkan dengan langkah yang konsisten.',
  about: 'Saya mempelajari Sistem Informasi di Universitas Bina Sarana Informatika. Dalam pengembangan fullstack, saya tertarik pada cara antarmuka dan basis data bekerja bersama. Pada proyek Taxation Map di Cartenz, misalnya, pengguna dapat mengubah batas objek pajak langsung pada peta dan menyimpan atributnya.',
  approach: 'Di bidang DevOps, saya ingin mengurangi langkah manual saat merilis aplikasi. Selama magang di Cartenz, saya menggunakan Python dan Docker untuk mengotomatiskan proses deployment. Pada proyek mandiri, saya juga menggunakan GitHub Actions untuk menjalankan alur CI/CD.',
  contactTitle: 'Hubungi saya',
  contactDescription: 'Untuk membahas proyek, peluang kerja, atau kolaborasi di bidang pengembangan web dan DevOps, silakan hubungi saya melalui email atau LinkedIn.',
  skillsHeading: ['Tools dan framework yang', 'saya gunakan'],
  aboutHeading: ['Tentang saya'],
  focusAreas: ['Aplikasi web', 'Peta interaktif', 'Otomatisasi deployment'],
  email: 'rafly23yoi@gmail.com',
  links: [
    {
      label: 'LinkedIn', url: 'https://linkedin.com/in/rafly-sugiarto',
      iconPath: 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.54V9H7.1zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z',
    },
    { label: 'GitHub', url: 'https://github.com/Nieruuu', iconPath: siGithub.path },
    { label: 'WhatsApp', url: 'https://wa.me/6289512263027', iconPath: siWhatsapp.path },
  ],
  navigation: [{ label: 'Profil', id: 'about' }, { label: 'Proyek', id: 'projects' }, { label: 'Keahlian', id: 'skills' }, { label: 'Kontak', id: 'contact' }],
};
