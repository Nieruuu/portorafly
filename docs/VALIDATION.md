# Validasi — 30 Oktober 2026

## Refinement 31 Oktober 2026

- ESLint tanpa warning, TypeScript strict, dan build Vite produksi: lulus.
- Hero idle: dua tangkapan layar pada scrollY=0 menunjukkan posisi/sudut badge yang berbeda tanpa interaksi scroll. Canvas aktif di hero dan dilepas setelah navigasi ke skills/contact.
- Tombol Jeda 3D serta kontrol Gerakan aktif/Tampilan tenang tidak ditemukan dalam DOM.
- Skills: 17 teknologi dari data; filter Frontend menampilkan tujuh teknologi. Memilih OpenLayers menghasilkan hanya Taxation Map sebagai project terkait; tombol membuka dialog yang sesuai dan Escape menutupnya.
- About dan contact diperiksa secara visual: bio/pengalaman tetap terbaca, ilustrasi CSS terintegrasi, dan CTA email memakai alamat yang sama.
- Lebar 1280, 768, dan 375: tidak ditemukan horizontal overflow. Pada mobile workbench menggunakan tiga kolom, dan contact/email tetap berada di dalam lebar halaman.
- Console tidak memperlihatkan warning/error aplikasi saat pemeriksaan.
- Ukuran build sekitar 395 KB JS utama (137 KB gzip), 927 KB scene lazy (256 KB gzip), dan 50 KB CSS (10 KB gzip). Peringatan chunk Three.js >500 KB tetap ada.

Reduced-motion ditinjau pada jalur media query React/CSS/GSAP; preferensi OS tidak diubah. Perangkat fisik low-end, kegagalan GPU sesungguhnya, dan pengukuran daya belum diuji. Perkiraan 30fps mengacu scheduler idle; scroll/pointer dapat meminta frame tambahan.

## Revisi dynamic scroll

- Lint tanpa warning, TypeScript strict, dan build produksi: lulus setelah perubahan.
- Desktop: dua pin (hero dan gallery); native scroll menggeser track horizontal dan memperbarui indikator 01–05. Tombol berikutnya memusatkan Taxation Map; pilihan langsung memusatkan POS Inventory.
- Keyboard Shift+Tab dari POS ke Blog memindahkan project yang difokuskan ke viewport. Tidak terdeteksi scroll horizontal internal yang tersisa.
- Detail POS dari galeri membuka native dialog; Escape kembali ke pemicu.
- Tampilan tenang: nol pin, tanpa class horizontal/stack, nol canvas; seluruh kartu tetap tersedia pada daftar biasa.
- Mobile 375×812: nol pin dan canvas, tanpa horizontal overflow. Layout menggunakan sticky stack dan memperlihatkan Revishit lalu Taxation Map saling bertumpuk saat scroll.
- Tombol Lanjut ke skills membawa judul skills ke offset 110px dan keluar dari rail tanpa scroll trap.
- Hero saat scroll menampilkan teks transisi dan susunan badge berbentuk toolkit. Playhead scene dibagi dengan hero DOM agar lazy mount/resize tidak membuat ScrollTrigger kedua pada elemen yang sudah dipin.
- Konten dan stack project dipertahankan; tidak ada dependency tambahan.
- JS utama sekitar 391 KB / 136 KB gzip; scene lazy sekitar 926 KB / 256 KB gzip. Peringatan ukuran chunk Three.js tetap ada.

Pengujian browser dilakukan melalui preview lokal. Reduced-motion OS mengikuti jalur CSS/React/GSAP yang sama untuk mematikan gerakan; simulasi perubahan preferensi OS dan perangkat fisik belum diuji. Tampilan tenang diuji langsung melalui tombol aplikasi.

## Pemeriksaan

- ESLint, tanpa warning: lulus.
- TypeScript strict dan build Vite produksi: lulus.
- Preview HTTP: status 200.
- Browser desktop: hero, logo 3D emboss, material clay, dan lighting terlihat; tidak ditemukan error/warning console pada pemeriksaan.
- Native project dialog POS: membuka detail yang sesuai, fokus masuk ke tombol tutup, Escape menutup dan mengembalikan fokus ke pemicu.
- Mobile 375×812: layout satu kolom; menu membuka dan menutup setelah memilih anchor; filter Frontend menampilkan tujuh teknologi yang sesuai.
- Lebar 375 dan 768: tidak ditemukan horizontal overflow atau gambar gagal dimuat. Tablet mempertahankan komposisi dua kolom.
- Mode mobile tidak memasang canvas WebGL. Desktop tombol Jeda 3D melepas canvas, lalu Aktifkan 3D memasang kembali.
- Lifecycle scene diperbaiki dan diuji saat scroll keluar/masuk hero: canvas hilang saat offscreen dan dipasang kembali ketika kembali ke hero. Event context loss pada pelepasan canvas yang disengaja tidak lagi mengaktifkan fallback permanen.
- Landscape 812×375 juga tidak menunjukkan horizontal overflow.

## Ukuran hasil build

- JS utama sekitar 385 KB / 134 KB gzip.
- Scene 3D terpisah sekitar 926 KB / 255 KB gzip. Vite masih memberi peringatan chunk >500 KB. Scene hanya dimuat sesuai kondisi desktop/viewport dan tidak wajib untuk membaca portfolio.
- CSS sekitar 20 KB / 5 KB gzip.
- Screenshot WebP: Taxation Map 92 KB, Blog 55 KB, Automation 34 KB. Total sekitar 180 KB, dibanding sekitar 1.88 MB untuk PNG asal.
- Font lokal subset Latin sekitar 59 KB total.

## Batas pemeriksaan

Reduced-motion ditinjau pada jalur CSS, media-query React, dan GSAP matchMedia; preferensi OS tidak diubah untuk pengujian. Kegagalan GPU/WebGL sesungguhnya, assistive technology, perangkat fisik low-end, Lighthouse, serta link eksternal yang membutuhkan login belum diuji. Tidak ada klaim skor performa atau angka Core Web Vitals.

Informasi project diverifikasi secara statis dari sumber di AUDIT.md; ini bukan pengujian fungsional aplikasi Revishit/POS/Taxmap. Tidak ada dependency, migrasi database, atau kode pada project sumber tersebut yang diubah.
