# Konsep dan wireframe

Dokumen ini mencatat desain awal. Revisi scroll terbaru menggantikan showcase dua kolom desktop dengan galeri horizontal serta hero yang dipin; lihat `DYNAMIC-SCROLL.md` untuk perilaku implementasi saat ini.

Professional Soft 3D Developer Portfolio. Referensi hirotos.com dipakai untuk prinsip hubungan scroll dan objek spasial, bukan meniru objek, layout, atau identitasnya. Halaman konten utama tidak memerlukan interaksi dengan 3D untuk dibaca.

## Sitemap

Homepage: Hero → Projects → Skills → About & Experience → Contact.
Project detail: native modal dari preview dan judul setiap project.
Navigasi anchor tetap bisa dipakai dengan keyboard dan URL hash.

```text
Desktop
┌ rafly.                         Karya Skills Tentang Kontak ┐
│ Halo, saya Rafly                badge clay dalam orbit      │
│ Merangkai ide.                  Laravel React Tailwind      │
│ Membangun solusi.               Docker Python MySQL OL      │
│ Deskripsi + CTA                 alas instalasi              │
├ Pilihan karya                                              ┤
│ Preview Revishit                  Preview Taxation Map      │
│ judul, deskripsi, stack            judul, deskripsi, stack  │
│ Preview Automation                Preview Blog              │
│ Preview POS Inventory                                      │
├ Tools + filter kategori                                    ┤
│ Logo dan nama teknologi dalam grid                         │
├ Tentang + pengalaman                                      ┤
│ Judul personal                    Bio dan riwayat           │
├ Contact: judul, email, social                              ┤
└ Footer                                                     ┘

Mobile
┌ rafly.                         Menu ┐
│ Perkenalan + headline               │
│ Deskripsi + CTA                     │
│ Komposisi clay statis               │
│ Project previews, satu kolom        │
│ Filter dan skills dua kolom         │
│ Bio → pengalaman → kontak           │
└ Footer                              ┘
```

## Token

Off-white `#F5F5EF`, charcoal `#252722`, cobalt `#2C4FE8`, coral `#F77759`, lime `#D8EE91`. Muted text `#62665E`. Warna lain pada badge berfungsi membedakan teknologi. Warna brand bukan satu-satunya cara mengenali logo; nama selalu tersedia pada daftar skills.

Space Grotesk untuk judul, DM Sans untuk body. Font variable disajikan lokal, hanya subset latin. Body rata kiri; batas lebar bacaan sekitar 36–48ch pada paragraf utama dan kartu. Tidak ada angka pencapaian buatan.

Momen visual utama adalah orbit badge clay. Showcase menggunakan komposisi dua kolom yang bergeser vertikal, bukan carousel tersembunyi. Preview dan judul adalah tombol detail; tautan eksternal hanya tersedia ketika data link ada.

## Motion

Hero memakai satu intro singkat. Rotasi/posisi orbit mengikuti ScrollTrigger; pointer memberikan tilt ringan. Progress scroll dan parallax gambar menanggapi scroll. Tidak ada scroll hijacking atau pin yang menghalangi konten mobile. Reduced-motion menghapus animasi dan langsung menampilkan konten. Scene 3D menggunakan on-demand rendering, lazy loading, dan static fallback.

Referensi teknis: https://r3f.docs.pmnd.rs/advanced/scaling-performance dan https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/.
