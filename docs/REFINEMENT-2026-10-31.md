# Refinement — 31 Oktober 2026

Perubahan dikerjakan pada project aktif `C:\Users\rafly\portorafly2`.

## Hero

- Badge memiliki lapisan `floating` di dalam grup posisi utama. Gerakan idle memakai sinus dengan fase berbeda untuk posisi vertikal, kedalaman, dan rotasi pada tiga sumbu. GSAP tetap mengontrol grup luar untuk perubahan susunan saat scroll.
- Frame idle diminta melalui invalidation sekitar 30 kali/detik. Scheduler dihentikan ketika tab tersembunyi; canvas dilepas ketika hero keluar viewport. DPR tetap dibatasi 1–1.5.
- Fallback mobile/WebGL memakai animasi CSS pada elemen anak, terpisah dari posisi serta rotasi komposisinya. Gerakan dihentikan ketika fallback tidak berada dalam viewport.
- Tombol Jeda 3D dan kontrol Gerakan aktif/Tampilan tenang di header dihapus. Preferensi OS reduced-motion tetap menonaktifkan gerakan, pin, dan WebGL. Nilai localStorage `portfolio-calm` dari versi lama diabaikan.

## Section bawah

- Skills berubah menjadi workbench dengan badge clay yang dapat dipilih melalui klik atau fokus keyboard, filter kategori, dan hubungan ke project yang benar-benar menggunakan teknologi tersebut. Semua hubungan dibaca dari `skills.ts` dan `projects.ts`; tidak ada skor proficiency atau klaim baru.
- About memakai bidang cobalt, monogram dari inisial nama, kartu pengalaman dalam timeline, dan parallax ringan pada objek dekoratif. Bio, perusahaan, jabatan, dan periode dipertahankan.
- Contact menjadi poster lime dengan ilustrasi amplop CSS, CTA email, serta tautan sosial asli. Tidak ada formulir atau endpoint baru.
- Heading dan focus areas ditambahkan pada `site.ts`. Tidak ada dependensi baru atau bitmap/model eksternal.

## File utama

- `components/HeroVisual.tsx` dan `components/TechScene.tsx`: idle animation dan penghapusan tombol.
- `components/SkillsWorkbench.tsx`: filter, pemilihan skill, dan project terkait.
- `components/ProfileSections.tsx`: about, pengalaman, dan contact.
- `sections.css`: komposisi, material CSS, breakpoint, dan fallback reduced-motion.

Validasi dicatat pada `VALIDATION.md`.
