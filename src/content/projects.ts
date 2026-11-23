import taxmap from '../../assets/projects/taxmap.webp';
import automation from '../../assets/projects/automation.webp';
import blog from '../../assets/projects/laravelblog.webp';
import revishit from '../../assets/projects/revishit.webp';

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
    description: 'Di Revishit, peserta bisa daftar, bayar, lalu kirim dokumen. Admin bisa memberi catatan revisi di dokumen yang sama.',
    skills: ['laravel', 'react', 'typescript', 'tailwind'], tags: ['Inertia'], visibility: 'public', live: 'https://revishit.com',
    image: revishit, imageAlt: 'Tampilan halaman utama Revishit Consulting',
    details: [
      'Area member untuk membership, pembayaran, jadwal, serta pengiriman dokumen.',
      'Alur review menyimpan catatan admin dan konfirmasi revisi peserta. Dokumen Google Docs tetap menggunakan link yang sama.',
      'Editor konten mendukung draft, pratinjau, dan publikasi halaman oleh admin.',
    ],
  },
  {
    id: 'taxation-map', title: 'Taxation Map', category: 'Geospatial application · versi 2.0', color: '#B9D8E8',
    description: 'Peta yang kukerjakan waktu magang di Cartenz. Pengguna bisa menandai objek pajak, mengubah batasnya, lalu mengisi datanya.',
    skills: ['laravel', 'react', 'typescript', 'openlayers'], tags: ['Inertia'], visibility: 'public',
    image: taxmap, imageAlt: 'Tampilan Taxation Map dari portfolio sebelumnya',
    details: ['Versi 2.0 menggunakan Laravel 13, React 19, Inertia 3, TypeScript, dan OpenLayers 10.', 'Pengelolaan layer dan atribut, pembaruan geometri, serta operasi merge dan split fitur spasial.', 'Screenshot yang ditampilkan berasal dari versi sebelumnya dan bukan tampilan versi 2.0.', 'Repository versi 2.0 bersifat private.'],
  },
  {
    id: 'automation', title: 'Automation Deployment', category: 'DevOps & automation', color: '#C6CDEF',
    description: 'Waktu magang di Cartenz, aku pakai Python dan Docker untuk mengotomatiskan langkah-langkah deployment.',
    skills: ['python', 'docker'], visibility: 'confidential', image: automation,
    imageAlt: 'Ilustrasi automation pipeline dari portfolio sebelumnya',
    details: ['Pipeline deployment dengan Python dan Docker, dikembangkan dalam pengalaman magang di Cartenz Technology Indonesia.', 'Kode tidak dipublikasikan karena ketentuan kerahasiaan perusahaan. Detail teknis dapat dibahas saat wawancara sesuai informasi yang boleh dibagikan.'],
  },
  {
    id: 'blog', title: 'Blog Post Laravel', category: 'Personal project', color: '#F5CBB9',
    description: 'Aku bikin blog ini waktu belajar Laravel. Di sini aku bisa menulis, mengedit, dan menghapus postingan.',
    skills: ['laravel', 'mysql', 'tailwind'], tags: ['Breeze'], visibility: 'public', image: blog,
    imageAlt: 'Tampilan Blog Post Laravel dari portfolio sebelumnya',
    github: 'https://github.com/Nieruuu/blogwpu-belajarlaravel', live: 'https://raflyblog.free.laravel.cloud',
    details: ['Membuat, mengedit, dan menghapus postingan blog menggunakan Laravel dan Breeze, dengan MySQL dan Tailwind CSS.'],
  },
  {
    id: 'pos-inventory', title: 'POS Inventory', category: 'Rafly Helm · retail application',
    description: 'Aplikasi kasir untuk Rafly Helm. Kasir bisa mencatat penjualan dan mencetak struk. Pemilik toko bisa mengecek stok yang masuk dan keluar.',
    skills: ['laravel', 'livewire', 'tailwind', 'mysql'], tags: ['Flux UI'], color: '#F1D884', visibility: 'public',
    details: ['Dibangun dengan Laravel 13, Livewire 4, Tailwind CSS 4, Flux UI, dan MySQL.', 'Modul kasir mencakup pencarian produk, kuantitas, diskon, metode pembayaran, dan struk thermal.', 'Akses inventory untuk owner dan akses transaksi untuk kasir. Modul inventory meliputi produk, kategori, stok masuk, stok keluar, dan pergerakan stok.', 'Repository bersifat private.'],
  },
  {
    id: 'komplek-hari-bahagia', title: 'Komplek Hari Bahagia', category: 'Permainan web 3D',
    description: 'Permainan eksplorasi untuk menyampaikan ucapan ulang tahun. Pemain menyusuri dua kampung di tepi sungai, berbincang dengan warga, lalu membuka hadiah dan surat digital.',
    skills: ['react', 'typescript'], tags: ['Three.js', 'React Three Fiber', 'Vite'],
    color: '#DCEBF1', visibility: 'public', live: 'https://hbdepi2.vercel.app/',
    details: [
      'Pemain dapat memakai keyboard di komputer atau joystick sentuh di ponsel. Peta menunjukkan tujuan berikutnya.',
      'Three.js dan React Three Fiber menampilkan lingkungan 3D dengan siklus siang dan malam. Lampu jalan dan rumah menyala saat sore.',
      'Antarmuka dan alur permainan ditulis dengan React dan TypeScript. Vite menghasilkan situs statis yang bisa dimainkan langsung di browser.',
    ],
  },
];
