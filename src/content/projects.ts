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
    id: 'revishit', title: 'Revishit', category: 'Aplikasi pendidikan', color: '#D8EE91',
    description: 'Revishit membantu peserta mengelola pendaftaran, pembayaran, dan pengiriman dokumen dalam satu aplikasi. Admin dapat meninjau dokumen dan mencatat revisi.',
    skills: ['laravel', 'react', 'typescript', 'tailwind'], tags: ['Inertia'], visibility: 'public', live: 'https://revishit.com',
    image: revishit, imageAlt: 'Tampilan halaman utama Revishit Consulting',
    details: [
      'Peserta dapat mengelola keanggotaan, melihat jadwal, dan mengirim dokumen melalui akun mereka.',
      'Catatan admin dan konfirmasi revisi tersimpan dalam alur peninjauan. Tautan Google Docs tetap sama sepanjang proses.',
      'Admin dapat menyimpan draf, melihat pratinjau, dan menerbitkan halaman melalui editor konten.',
    ],
  },
  {
    id: 'taxation-map', title: 'Taxation Map', category: 'Aplikasi geospasial · versi 2.0', color: '#B9D8E8',
    description: 'Saya mengembangkan aplikasi pemetaan ini selama magang di Cartenz. Pengguna dapat menandai objek pajak, mengubah batasnya, dan memperbarui atributnya.',
    skills: ['laravel', 'react', 'typescript', 'openlayers'], tags: ['Inertia'], visibility: 'public',
    image: taxmap, imageAlt: 'Peta objek pajak pada Taxation Map versi sebelumnya',
    details: ['Versi 2.0 menggunakan Laravel 13, React 19, Inertia 3, TypeScript, dan OpenLayers 10.', 'Pengguna dapat mengelola lapisan peta, menyunting geometri, serta menggabungkan atau membagi objek spasial.', 'Gambar pratinjau menampilkan versi sebelumnya.', 'Akses repositori versi 2.0 bersifat terbatas.'],
  },
  {
    id: 'automation', title: 'Automation Deployment', category: 'DevOps dan otomatisasi', color: '#C6CDEF',
    description: 'Selama magang di Cartenz Technology Indonesia, saya menggunakan Python dan Docker untuk mengotomatiskan tahapan deployment yang sebelumnya perlu dijalankan berulang kali.',
    skills: ['python', 'docker'], visibility: 'confidential', image: automation,
    imageAlt: 'Ilustrasi alur otomatisasi deployment',
    details: ['Dalam wawancara, saya dapat menjelaskan peran saya dan pendekatan teknis proyek sesuai ketentuan kerahasiaan perusahaan.'],
  },
  {
    id: 'blog', title: 'Blog Post Laravel', category: 'Proyek mandiri', color: '#F5CBB9',
    description: 'Saya membuat aplikasi blog ini untuk mempelajari Laravel. Pengguna dapat menulis, menyunting, dan menghapus artikel.',
    skills: ['laravel', 'mysql', 'tailwind'], tags: ['Breeze'], visibility: 'public', image: blog,
    imageAlt: 'Tampilan aplikasi Blog Post Laravel',
    github: 'https://github.com/Nieruuu/blogwpu-belajarlaravel', live: 'https://raflyblog.free.laravel.cloud',
    details: ['Aplikasi menggunakan Laravel dan Breeze, dengan MySQL untuk menyimpan artikel dan Tailwind CSS untuk antarmuka.'],
  },
  {
    id: 'pos-inventory', title: 'POS Inventory', category: 'Aplikasi ritel · Rafly Helm',
    description: 'Saya membangun aplikasi kasir untuk Rafly Helm. Kasir dapat mencatat penjualan dan mencetak struk, sementara pemilik toko dapat memantau stok masuk dan keluar.',
    skills: ['laravel', 'livewire', 'tailwind', 'mysql'], tags: ['Flux UI'], color: '#F1D884', visibility: 'public',
    details: ['Dibangun dengan Laravel 13, Livewire 4, Tailwind CSS 4, Flux UI, dan MySQL.', 'Modul kasir mencakup pencarian produk, kuantitas, diskon, metode pembayaran, dan pencetakan struk termal.', 'Pemilik toko mengelola produk, kategori, dan pergerakan stok. Kasir memiliki akses untuk mencatat transaksi.', 'Akses repositori bersifat terbatas.'],
  },
  {
    id: 'komplek-hari-bahagia', title: 'Website Ucapan Ulang Tahun', category: 'Permainan web 3D',
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
