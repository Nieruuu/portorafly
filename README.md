# Rafly — Professional Soft 3D Portfolio

Pengembangan dari `Nieruuu/portorafly`, dengan konten lama yang dipertahankan dan showcase yang diverifikasi dari repository project. React 19, TypeScript, Vite, React Three Fiber, Drei, Three.js, dan GSAP ScrollTrigger.

## Menjalankan

Node.js 22.12+ disarankan.

```sh
npm ci
npm run dev
```

Buka alamat Local yang ditampilkan Vite. Pada komputer pengerjaan, `http://localhost:5173/` berhasil dibuka. Untuk versi produksi:

```sh
npm run lint
npm run build
npm run preview
```

Upload isi `dist/` ke hosting statis setelah build. Build menggunakan base relatif agar dapat dipasang di subdirectory. Tidak membutuhkan backend portfolio atau secret.

## Mengubah konten

| File | Isi |
| --- | --- |
| `src/content/site.ts` | Nama, headline, bio, navigasi, kontak |
| `src/content/projects.ts` | Judul, kategori, deskripsi, gambar, stack, detail, link |
| `src/content/skills.ts` | Nama teknologi, logo, kategori, warna, badge 3D |
| `src/content/experiences.ts` | Perusahaan, peran, periode, deskripsi pengalaman |

Untuk menambah project, tambahkan item pada `projects`. Nilai `skills` berisi ID yang sudah ada pada `skills.ts`. Komponen otomatis menampilkan label serta logo yang sesuai. Gambar bersifat opsional; tambahkan gambar asli dan impor dari folder `assets/projects`. Revishit dan POS memakai ringkasan modul yang dibuat dengan HTML/CSS, bukan screenshot aplikasi.

Untuk menambah badge, impor logo dari Simple Icons, tambahkan skill dengan `path`, `color`, dan `featured: true`. Posisi 3D serta fallback otomatis dihitung dari jumlah badge. `featured: false` atau tanpa `featured` tetap menampilkan teknologi dalam daftar skills. Jangan menambahkan klaim teknologi yang belum dipakai atau dipelajari.

`visibility: 'pending'` menyembunyikan project belum siap. `confidential` menampilkan showcase dan keterangan kerahasiaan. `public` berarti case study ditampilkan; tidak berarti kode sumber project bersifat publik. Link repository hanya ditampilkan bila `github` diisi.

## Interaksi dan aksesibilitas

Revisi dynamic scroll: hero dengan perubahan susunan badge, galeri project horizontal yang dipin di desktop, dan kartu bertumpuk di mobile. Sejak revisi 31 Oktober 2026, badge juga melayang dan berputar halus saat halaman diam, tanpa tombol jeda. Preferensi reduced-motion dari sistem tetap diikuti. Detail perilaku serta breakpoint ada di `docs/DYNAMIC-SCROLL.md`.

- Scene 3D dimuat terpisah. Frame idle diminta sekitar 30 kali/detik untuk gerakan otomatis; saat scroll, GSAP juga dapat meminta frame untuk menjaga respons.
- Layar 600px ke bawah dan browser tanpa WebGL2 memakai badge CSS dengan gerakan ringan. Reduced-motion memakai tampilan statis.
- Scene dilepas saat keluar viewport. DPR dibatasi 1–1.5, geometri sederhana, tanpa model GLTF atau tekstur jarak jauh.
- GSAP mengikuti `prefers-reduced-motion` dan membersihkan ScrollTrigger saat unmount/pergantian preferensi. Preferensi ini menonaktifkan pin, scrub, sticky stack, dan WebGL. Pengaturan gerakan lokal dari versi lama tidak lagi digunakan.
- Native dialog mendukung Escape, focus containment, dan kembali ke pemicu. Menu mobile memiliki expanded state dan Escape.
- Font disajikan secara lokal. Screenshot dioptimalkan menjadi WebP dengan script `node scripts/optimize-images.mjs`.

## Dokumen pengerjaan

- `docs/AUDIT.md`: sumber fakta dan keputusan migrasi.
- `docs/DESIGN.md`: sitemap, wireframe, token, serta perilaku motion.
- `docs/VALIDATION.md`: hasil pemeriksaan serta batas verifikasi.
- `docs/DYNAMIC-SCROLL.md`: perilaku scroll baru dan file yang mengaturnya.
- `docs/REFINEMENT-2026-10-31.md`: animasi idle serta pembaruan skills, about, dan contact.

`js/main.js` dan `src/input.css` lama disimpan sebagai referensi migrasi dan tidak dipakai oleh aplikasi baru. Task Management dari data lama tidak ditampilkan karena screenshot tidak tersedia dan link repo menggunakan pemilik berbeda; perlu konfirmasi sebelum ditambahkan kembali.
