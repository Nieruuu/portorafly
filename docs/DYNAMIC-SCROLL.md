# Dynamic scroll revision — 30 Oktober 2026

## Arah interaksi

Referensi https://www.hirotos.com/projects/ diperiksa langsung di browser. Halaman tersebut memakai looping gallery horizontal yang bergeser saat scroll. Portfolio ini memakai interpretasi sendiri: galeri berakhir setelah semua project, lalu pengunjung bisa meneruskan ke skills, pengalaman, dan kontak.

Palet, font, konten, dan material soft clay dipertahankan. Perubahan fokus pada komposisi dan hubungan antarbab, bukan menambahkan animasi kecil pada setiap elemen.

## Desktop (lebar ≥900px dan tinggi ≥700px)

1. Hero dipin sekitar 85% tinggi viewport tambahan. Headline perkenalan berganti secara visual menjadi “Dari tools, jadi karya.” Badge 3D bermorfologi dari orbit menjadi susunan toolkit.
2. Project gallery menjadi panggung setinggi viewport. Scroll vertikal menggerakkan rail horizontal. Kartu menjauh dari pusat dengan sedikit rotasi perspektif, skala, dan perbedaan ketinggian.
3. Indikator project, progress rail, tombol sebelumnya/berikutnya, serta pilihan project langsung mengikuti posisi galeri. Tombol “Lanjut ke skills” dapat melewati panggung.
4. Galeri berakhir secara alami, kemudian halaman kembali ke alur vertikal biasa.

Tidak ada wheel interception, infinite-scroll trap, atau library smooth-scroll baru. GSAP menggerakkan transform mengikuti native document scroll. Maksimal dua pin pada halaman. Jarak travel dihitung dari ukuran rail serta jumlah project, bukan jumlah kartu yang ditulis manual.

## Mobile, keyboard, dan mode tenang

- Layar <900px dengan tinggi ≥700px: kartu disusun vertikal dan menumpuk menggunakan CSS sticky. Kartu sebelumnya mengecil dan miring sedikit mengikuti scroll berikutnya.
- Layar pendek/landscape: daftar statis tanpa pin atau sticky stack.
- Reduced-motion OS atau tombol “Tampilan tenang”: daftar biasa, tanpa pin, scrub, stack, dan WebGL. Pilihan tombol disimpan secara lokal; jika storage tidak tersedia halaman tetap berfungsi.
- Tombol “Gerakan aktif” mengembalikan perjalanan scroll. Saat berpindah mode di galeri, posisi project diusahakan tetap terlihat.
- Tab/Shift+Tab ke kartu di luar rail akan menggeser galeri ke project yang memperoleh fokus. Fokus dalam mobile stack menempatkan kartu di atas tumpukan.
- Native dialog tetap mendukung Escape, focus containment, dan pengembalian fokus.
- Semua isi project tetap berasal dari `src/content/projects.ts`; logo dan badges berasal dari `skills.ts`.

## File utama

- `src/components/ProjectGallery.tsx`: pengukuran rail, pin, scrub, kontrol, dan navigasi fokus.
- `src/motion.css`: panggung horizontal, perspektif, mobile stack, dan fallback.
- `src/App.tsx`: hero journey dan pilihan gerakan global.
- `src/components/TechScene.tsx`: perubahan susunan badge 3D.

Referensi teknis: https://gsap.com/docs/v3/Plugins/ScrollTrigger/ dan https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/.
