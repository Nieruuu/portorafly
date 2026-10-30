# Audit sumber dan batas fakta

Audit dilakukan 30 Oktober 2026 sebelum perubahan implementasi.

## Portfolio asal

- Repository: https://github.com/Nieruuu/portorafly
- Commit dasar: `94ed8c4` (perubahan bahasa).
- HTML statis, JS DOM manual, Tailwind CLI 4.1; belum ada React, Three.js, lint, atau pemeriksaan TypeScript.
- Data project, skills, pengalaman berada di `js/main.js`; bio dan kontak di `index.html`.
- Screenshot tersedia: Taxation Map, Automation, Blog Laravel. Screenshot Task Management tidak tersedia.
- Kontak, perusahaan, periode magang, dan project lama ditranskripsikan dari portfolio. Semester kuliah tidak dipertahankan karena informasi waktu tersebut bisa usang.

## Verifikasi project

| Project | Sumber yang dibaca | Fakta yang dipakai |
| --- | --- | --- |
| Revishit | `Nieruuu/revishit` commit `25a44c6`; composer.json, package.json, docs/paper-review-workflow.md, docs/content-management.md; juga checkout lokal | Laravel 13, React 19, Inertia 3, TypeScript, Tailwind 4; member, payment, review dokumen, draft/pratinjau/publikasi konten |
| Taxation Map 2.0 | `Nieruuu/taxmap-2.0` commit `1051c37`; composer.json, package.json, routes/web.php, struktur komponen map | Laravel 13, React 19, Inertia 3, TypeScript, OpenLayers 10; layer, atribut, geometri, merge/split |
| POS Inventory | `Nieruuu/ralfyhelm` commit `59f4018`; README.md, composer.json, package.json, routes/web.php | Laravel 13, Livewire 4, Tailwind 4, Flux UI; MySQL dalam README; POS, produk, stok, pemisahan role owner/kasir |
| Automation Deployment | `js/main.js` portfolio asal dan screenshot asli | Python, Docker, pipeline deployment; informasi kerahasiaan dipertahankan |
| Blog Post Laravel | `js/main.js` portfolio asal dan screenshot asli | CRUD postingan, Laravel, Breeze, MySQL, Tailwind; link asli dipertahankan |

README POS menyebut Breeze, tetapi manifest saat ini memakai Fortify. Karena itu showcase tidak mengklaim Breeze untuk POS. Database Revishit dan Taxmap tidak ditebak dari default Laravel atau file secret. MariaDB belum ditambahkan sebagai skill karena belum ada bukti yang diperlukan dalam sumber yang diperiksa; MySQL didukung data lama dan README POS.

Plugin GitHub dicoba melalui pencarian, fetch_file, dan get_repo, tetapi server mengembalikan Unknown tool. Repo private berhasil dibaca melalui Git dengan akses komputer. Source private dipakai untuk audit read-only; tidak disalin ke bundle portfolio. Tidak ada secret atau .env project yang dibaca.

## Keputusan implementasi

- Migrasi ke React + TypeScript + Vite untuk memenuhi R3F dan konten bertipe; bukan menambahkan runtime React ke halaman DOM lama secara parsial.
- Tailwind tidak diperlukan untuk layout baru; token CSS dipusatkan di `src/styles.css`.
- Konten dipisah sesuai empat file yang diminta. Tidak ada CMS/backend baru karena kebutuhan utamanya editable di kode.
- Logo memakai path Simple Icons, dengan clay container dan logo emboss. Kategori dan data skill dibagi antara DOM dan scene.
- Screenshot Taxation Map diberi keterangan versi sebelumnya. Revishit/POS memakai ringkasan alur/modul, bukan mock screenshot yang menyiratkan tampilan asli.
- Task Management ditahan dari showcase karena link pemilik berbeda dan asset hilang. Tidak mengklaim hasil, metrik, pelanggan, atau performa yang belum diverifikasi.
- Tidak melakukan push, mengubah repo project sumber, atau menerbitkan website.
