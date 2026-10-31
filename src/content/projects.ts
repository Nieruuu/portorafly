import taxmap from '../../assets/projects/taxmap.webp';
import automation from '../../assets/projects/automation.webp';
import blog from '../../assets/projects/laravelblog.webp';

export interface Project {
  id: string; title: string; category: string; description: string;
  skills: string[]; tags?: string[]; color: string;
  image?: string; imageAlt?: string; github?: string; live?: string;
  visibility: 'public' | 'confidential' | 'pending';
  details: string[];
}

export const projects: Project[] = [
  {
    id: 'revishit', title: 'Revishit', category: 'Web application', color: '#D8EE91',
    description: 'Website layanan pendidikan dengan area member dan admin: dari pendaftaran dan pembayaran hingga pengiriman dan review dokumen.',
    skills: ['laravel', 'react', 'typescript', 'tailwind'], tags: ['Inertia'], visibility: 'public', live: 'https://revishit.com',
    details: [
      'Area member untuk membership, pembayaran, jadwal, serta pengiriman dokumen.',
      'Alur review menyimpan catatan admin dan konfirmasi revisi peserta. Dokumen Google Docs tetap menggunakan link yang sama.',
      'Editor konten mendukung draft, pratinjau, dan publikasi halaman oleh admin.',
    ],
  },
  {
    id: 'taxation-map', title: 'Taxation Map', category: 'Geospatial application · versi 2.0', color: '#B9D8E8',
    description: 'Aplikasi peta berbasis Laravel dan React dengan pengelolaan layer, atribut, serta pengeditan geometri menggunakan OpenLayers.',
    skills: ['laravel', 'react', 'typescript', 'openlayers'], tags: ['Inertia'], visibility: 'public',
    image: taxmap, imageAlt: 'Tampilan Taxation Map dari portfolio sebelumnya',
    details: ['Versi 2.0 menggunakan Laravel 13, React 19, Inertia 3, TypeScript, dan OpenLayers 10.', 'Pengelolaan layer dan atribut, pembaruan geometri, serta operasi merge dan split fitur spasial.', 'Screenshot yang ditampilkan berasal dari versi sebelumnya dan bukan tampilan versi 2.0.', 'Repository versi 2.0 bersifat private.'],
  },
  {
    id: 'automation', title: 'Automation Deployment', category: 'DevOps & automation', color: '#C6CDEF',
    description: 'Automation pipeline menggunakan Python dan Docker untuk menyederhanakan alur deployment selama magang di Cartenz Technology Indonesia.',
    skills: ['python', 'docker'], visibility: 'confidential', image: automation,
    imageAlt: 'Ilustrasi automation pipeline dari portfolio sebelumnya',
    details: ['Pipeline deployment dengan Python dan Docker, dikembangkan dalam pengalaman magang di Cartenz Technology Indonesia.', 'Kode tidak dipublikasikan karena ketentuan kerahasiaan perusahaan. Detail teknis dapat dibahas saat wawancara sesuai informasi yang boleh dibagikan.'],
  },
  {
    id: 'blog', title: 'Blog Post Laravel', category: 'Personal project', color: '#F5CBB9',
    description: 'Aplikasi blog untuk membuat, mengedit, dan menghapus postingan, menggunakan Laravel dan Breeze.',
    skills: ['laravel', 'mysql', 'tailwind'], tags: ['Breeze'], visibility: 'public', image: blog,
    imageAlt: 'Tampilan Blog Post Laravel dari portfolio sebelumnya',
    github: 'https://github.com/Nieruuu/blogwpu-belajarlaravel', live: 'https://raflyblog.free.laravel.cloud',
    details: ['Membuat, mengedit, dan menghapus postingan blog menggunakan Laravel dan Breeze, dengan MySQL dan Tailwind CSS.'],
  },
  {
    id: 'pos-inventory', title: 'POS Inventory', category: 'Rafly Helm · retail application',
    description: 'Sistem kasir dan inventory untuk Rafly Helm: transaksi penjualan, pengelolaan produk, serta pencatatan pergerakan stok.',
    skills: ['laravel', 'livewire', 'tailwind', 'mysql'], tags: ['Flux UI'], color: '#F1D884', visibility: 'public',
    details: ['Dibangun dengan Laravel 13, Livewire 4, Tailwind CSS 4, Flux UI, dan MySQL.', 'Modul kasir mencakup pencarian produk, kuantitas, diskon, metode pembayaran, dan struk thermal.', 'Akses inventory untuk owner dan akses transaksi untuk kasir. Modul inventory meliputi produk, kategori, stok masuk, stok keluar, dan pergerakan stok.', 'Repository bersifat private.'],
  },
];
