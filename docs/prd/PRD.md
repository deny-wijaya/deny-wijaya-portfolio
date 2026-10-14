# PRD — Portfolio Deny Wijaya (Next.js + Tailwind, Light & Dark)

> **Untuk Claude Code:** Dokumen ini adalah spesifikasi lengkap. Implementasikan **persis** sesuai nilai di sini (warna, ukuran, spacing, radius, durasi animasi, copy). Jangan menambah section, efek, library, atau teks yang tidak tertulis. Jika ada konflik, urutan prioritas: **§4 Design Tokens → §6 Spesifikasi Komponen → §8 Konten**. Referensi visual asli ada di folder `reference/` (`Futuristic.dc.html` = dark, `FuturisticLight.dc.html` = light). File tersebut format kanvas desain, **bukan** kode untuk disalin; gunakan hanya sebagai referensi nilai.

---

## 1. Ringkasan

| Item | Nilai |
|---|---|
| Produk | Website portfolio satu halaman (single page) untuk **Deny Wijaya**, Front-End & Mobile Developer |
| Tujuan utama | Mendapatkan peluang kerja remote sebagai frontend engineer (recruiter paham posisi dalam 5 detik, menemukan bukti kemampuan dalam 1 menit) |
| Tujuan sekunder | Menarik klien freelance |
| Gaya | "Futuristic editorial": grid blueprint samar, panel kaca (glass), aksen biru, tipografi Geist + Geist Mono |
| Tema | **Dark** dan **Light**, bisa diganti lewat tombol di navigasi. Layout, konten, dan interaksi identik di kedua tema; hanya token warna/bayangan yang berbeda |
| Domain | `https://denywijaya.com` |

## 2. Tech stack & batasan

- **Next.js 16** (App Router, TypeScript strict). Server Components secara default; `"use client"` hanya untuk: `Nav`, `ThemeToggle`, `ExperienceTabs`, `ProjectNotes`.
- **Tailwind CSS v4** (`@tailwindcss/postcss`), token didefinisikan via CSS variables + `@theme inline` (lihat §4.4).
- **Font:** paket npm `geist` (`geist/font/sans`, `geist/font/mono`). Jangan pakai Google Fonts runtime.
- **Gambar:** `next/image`.
- **Tanpa dependency tambahan** (tanpa `next-themes`, framer-motion, icon library, dll). Theme switching ditulis sendiri (§7.1). Ikon = inline SVG.
- Semua konten di satu file `content/site.ts` (§8). Komponen hanya me-render data.

## 3. Struktur file

```
app/
  layout.tsx            # font, metadata, theme script anti-flash, <body class="backdrop-grid">
  page.tsx              # susunan section + JSON-LD Person
  globals.css           # token light/dark, @theme, komponen kecil, keyframes
  icon.svg              # favicon "<dw/>"
  opengraph-image.tsx   # OG image 1200x630 via next/og
components/
  Nav.tsx               # client: sticky nav, active section, mobile menu, ThemeToggle
  ThemeToggle.tsx       # client
  SideRails.tsx         # rail sosial kiri + email kanan (≥1500px)
  Hero.tsx
  SectionHeading.tsx
  Work.tsx              # featured projects + other projects
  ProjectVisual.tsx     # screenshot atau placeholder berlabel
  ProjectNotes.tsx      # client: expand/collapse catatan proyek (Karna)
  Experience.tsx        # client: tabs
  About.tsx
  Skills.tsx
  Contact.tsx           # contact + footer
content/
  site.ts
public/
  images/dw-pixel.png           # dari assets/dw-pixel.png (1254×1254)
  cv/CV-Deny-Wijaya-2026.pdf    # dari assets/
```

## 4. Design system

### 4.1 Warna (token semantik)

Semua warna **wajib** lewat token. Tidak boleh ada hex langsung di komponen kecuali yang tercantum di tabel ini.

| Token | Fungsi | **Dark** | **Light** |
|---|---|---|---|
| `--paper` | Latar halaman | `#0A0A0D` | `#F7F7F4` |
| `--surface` | Kartu, tab hover, latar avatar | `#121218` | `#FFFFFF` |
| `--glass` | Panel kaca (dipakai dengan blur) | `rgba(18,18,24,0.72)` | `rgba(255,255,255,0.80)` |
| `--ink` | Teks utama | `#EDEDF2` | `#15161A` |
| `--muted` | Teks sekunder, label, tag | `#8F8FA0` | `#5E6270` |
| `--soft` | Paragraf panjang (About, Skills dd, bullet Experience) | `#C8C8D2` | `#3A3D46` |
| `--contact-copy` | Paragraf di Contact | `#B6B6C2` | `#4A4D57` |
| `--line` | Border & divider | `#22222B` | `#E3E4E8` |
| `--accent` | Aksen (link, nomor, tag, tombol utama) | `#6C8CFF` | `#315CFD` |
| `--on-accent` | Teks di atas tombol aksen | `#0A0A0D` | `#FFFFFF` |
| `--ph-warm` | Varian placeholder hangat | `#15151C` | `#EFEEE8` |
| `--grid-line` | Garis grid blueprint latar | `rgba(143,143,160,0.06)` | `rgba(21,22,26,0.055)` |
| `--dot` | 3 titik di bar terminal | `#2E2E38` | `#D9DAE0` |
| `--ok` | Titik status "Open to remote roles" | `#3DDC84` | `#16A34A` |
| `--ok-ring` | Ring titik status | `rgba(61,220,132,0.16)` | `rgba(22,163,74,0.14)` |
| `--nav-bg` | Latar nav sticky | `rgba(10,10,13,0.70)` | `rgba(247,247,244,0.82)` |

**Bayangan & efek per tema**

| Token | Dark | Light |
|---|---|---|
| `--shadow-panel` (feat-panel) | `0 30px 70px -30px rgba(0,0,0,.85)` | `0 24px 50px -28px rgba(21,22,26,.22)` |
| `--shadow-term` (kartu terminal hero) | `0 30px 80px -30px rgba(0,0,0,.8)` | `0 30px 60px -32px rgba(21,22,26,.22)` |
| `--shadow-avatar` | `0 0 32px color-mix(in srgb, var(--accent) 22%, transparent)` | `0 14px 36px -16px color-mix(in srgb, var(--accent) 45%, transparent)` |
| `--shadow-btn` (tombol utama) | `0 8px 30px -8px color-mix(in srgb, var(--accent) 70%, transparent)` | `0 10px 28px -10px color-mix(in srgb, var(--accent) 60%, transparent)` |
| `--ok-glow` (tambahan pada titik status) | `0 0 12px #3DDC84` | `none` |
| `--orb-opacity` (cahaya bulat hero) | `0.75` | `0.35` |
| `--tint-amount` (wash aksen di gambar proyek) | `16%` | `6%` |
| `--tint-blend` | `screen` | `multiply` |

Warna turunan (pakai `color-mix`, berlaku di kedua tema):
- Border avatar: `color-mix(in srgb, var(--accent) 55%, transparent)`
- Border panel saat hover: `color-mix(in srgb, var(--accent) 55%, var(--line))`
- Border kartu "other projects" saat hover: `color-mix(in srgb, var(--accent) 50%, var(--line))`; shadow `0 24px 50px -24px color-mix(in srgb, var(--accent) 45%, transparent)`
- Hover tombol Resume / Say hello: background `color-mix(in srgb, var(--accent) 14%, transparent)`
- Tab aktif: background `color-mix(in srgb, var(--accent) 8%, transparent)`
- Glow Contact: `radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent), transparent 65%)`
- Orb hero: `radial-gradient(circle at 35% 35%, color-mix(in srgb, var(--accent) 38%, transparent), transparent 62%)`
- `::selection`: background `var(--accent)`, teks `var(--on-accent)`

### 4.2 Tipografi

- **Sans:** Geist (400, 500, 600). **Mono:** Geist Mono (400, 500).
- Base `body`: 17px / line-height 1.6, `-webkit-font-smoothing: antialiased`. Di < 860px: 16px.

| Peran | Font | Ukuran | Weight | Line-height | Letter-spacing | Lain |
|---|---|---|---|---|---|---|
| H1 hero | Sans | `clamp(40px, 6.6vw, 95px)` (desktop 95px) | 500 | 0.98 | -0.045em | baris ke-2 warna `--muted` |
| "> Hi, my name is" | Mono | 15px (mobile 13px) | 400 | – | 0.02em | warna accent |
| Eyebrow / label (`.eyebrow`) | Mono | 12px | 400 | – | 0.10em | UPPERCASE |
| Lede hero | Sans | 21px (mobile 18px) | 400 | 1.5 | -0.01em | max-width 34ch |
| Section title (H2) | Sans | `clamp(30px, 3.6vw, 46px)` | 500 | 1.02 | -0.035em | |
| Section number | Mono | `clamp(16px, 1.6vw, 20px)` | 400 | – | 0 | accent, contoh `01.` |
| Section intro | Sans | 16px | 400 | 1.6 | – | muted, max 60ch |
| Nama proyek (H3) | Sans | `clamp(30px, 3.4vw, 44px)` | 500 | 1.05 | -0.03em | |
| Label "Featured project · 01" | Mono | 13px | 400 | – | – | accent, **tidak** uppercase |
| Isi panel proyek | Sans | 16px | 400 | 1.6 | – | |
| Bullet panel proyek | Sans | 14.5px | 400 | – | – | muted, prefix `▹ ` accent |
| Tag / stack | Mono | 13px (kartu: 12px) | 400 | – | – | muted |
| Link proyek | Mono | 13px | 400 | – | – | ink, underline 1px accent |
| Nav link | Mono | 13px | 400 | – | – | prefix `01.` accent |
| Tombol | Mono | 14px | 500 | – | – | |
| Judul tab Experience (H3) | Sans | 24px | 500 | – | -0.02em | |
| Tab | Mono | 13.5px | 400 | – | – | |
| About paragraf 1 | Sans | 23px (mobile 18px) | 400 | 1.45 | -0.015em | ink |
| About paragraf 2–3 | Sans | 19px (mobile 18px) | 400 | 1.6 | -0.005em | soft |
| Contact title | Sans | `clamp(44px, 6.4vw, 88px)` | 500 | 0.98 | -0.045em | |
| Contact copy | Sans | 20px (mobile 18px) | 400 | 1.5 | – | `--contact-copy` |
| Kartu terminal | Mono | 13.5px | 400 | 1.9 | – | |
| Footer | Sans | 14px | 400 | – | – | muted |

### 4.3 Layout, spacing, radius, motion

- **Container `.wrap`:** `max-width: 1280px; margin: 0 auto; padding-inline: 40px` (< 860px: `20px`).
- **Grid:** 12 kolom, `column-gap: 24px` (< 860px: 1 kolom).
- **Breakpoint:** `1500px` (side rails muncul), `1100px` (tablet), `860px` (batas mobile ↔ desktop), `420px` (HP kecil). Breakpoint default Tailwind **diganti**: `--breakpoint-md: 860px` dan `--breakpoint-lg: 1100px` (lihat §4.4), sehingga `md:` = ≥ 860px dan `lg:` = ≥ 1100px. Untuk 1500px pakai `min-[1500px]:`, untuk 420px pakai `max-[420px]:`.
- **Jarak antar section:** `padding-top: 140px` (< 860px: `104px`). Section heading `padding-bottom: 56px` (< 860px: `36px`).
- **Radius:** panel/kartu/visual `14px`; tombol & menu button `8px`; tombol Resume `6px`; avatar `10px` (mobile `8px`); pill status `999px`; label placeholder `8px`.
- **Border:** selalu `1px solid var(--line)` kecuali disebut lain.
- **Glass:** `background: var(--glass); backdrop-filter: blur(16px)` (terminal hero: `blur(14px)`).
- **Easing standar:** `cubic-bezier(.2,.7,.2,1)`.
- **Keyframes:**
  - `rise`: dari `opacity:0; translateY(14px)` ke normal, 0.7s (panel tab: 0.35s)
  - `drop`: dari `opacity:0; translateY(-6px)`, 0.22s (mobile menu) / 0.25s (notes)
  - `float`: 50% → `translate(-30px, 24px) scale(1.05)`, 12s ease-in-out infinite (orb)
  - `blink`: 50% opacity 0, 1.1s `steps(1)` infinite (caret)
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` → matikan semua animation & transition, `scroll-behavior: auto`.
- **Scroll:** `html { scroll-behavior: smooth }`; semua `section[id], article[id]` `scroll-margin-top: 88px`.
- **Focus:** `:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 2px }`.

### 4.4 Implementasi token (wajib dipakai apa adanya)

`app/globals.css`:

```css
@import "tailwindcss";
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

:root, [data-theme="light"] {
  --paper:#F7F7F4; --surface:#FFFFFF; --glass:rgba(255,255,255,.80);
  --ink:#15161A; --muted:#5E6270; --soft:#3A3D46; --contact-copy:#4A4D57;
  --line:#E3E4E8; --accent:#315CFD; --on-accent:#FFFFFF; --ph-warm:#EFEEE8;
  --grid-line:rgba(21,22,26,.055); --dot:#D9DAE0; --ok:#16A34A; --ok-ring:rgba(22,163,74,.14);
  --nav-bg:rgba(247,247,244,.82);
  --shadow-panel:0 24px 50px -28px rgba(21,22,26,.22);
  --shadow-term:0 30px 60px -32px rgba(21,22,26,.22);
  --shadow-avatar:0 14px 36px -16px color-mix(in srgb,var(--accent) 45%,transparent);
  --shadow-btn:0 10px 28px -10px color-mix(in srgb,var(--accent) 60%,transparent);
  --ok-glow:none; --orb-opacity:.35; --tint-amount:6%; --tint-blend:multiply;
  color-scheme: light;
}
[data-theme="dark"] {
  --paper:#0A0A0D; --surface:#121218; --glass:rgba(18,18,24,.72);
  --ink:#EDEDF2; --muted:#8F8FA0; --soft:#C8C8D2; --contact-copy:#B6B6C2;
  --line:#22222B; --accent:#6C8CFF; --on-accent:#0A0A0D; --ph-warm:#15151C;
  --grid-line:rgba(143,143,160,.06); --dot:#2E2E38; --ok:#3DDC84; --ok-ring:rgba(61,220,132,.16);
  --nav-bg:rgba(10,10,13,.70);
  --shadow-panel:0 30px 70px -30px rgba(0,0,0,.85);
  --shadow-term:0 30px 80px -30px rgba(0,0,0,.8);
  --shadow-avatar:0 0 32px color-mix(in srgb,var(--accent) 22%,transparent);
  --shadow-btn:0 8px 30px -8px color-mix(in srgb,var(--accent) 70%,transparent);
  --ok-glow:0 0 12px #3DDC84; --orb-opacity:.75; --tint-amount:16%; --tint-blend:screen;
  color-scheme: dark;
}

@theme inline {
  --color-paper: var(--paper);   --color-surface: var(--surface); --color-glass: var(--glass);
  --color-ink: var(--ink);       --color-muted: var(--muted);     --color-soft: var(--soft);
  --color-line: var(--line);     --color-accent: var(--accent);   --color-on-accent: var(--on-accent);
  --color-ph-warm: var(--ph-warm);
  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;
  --breakpoint-md: 860px;
  --breakpoint-lg: 1100px;
}
```

Dengan ini kelas Tailwind seperti `bg-paper`, `text-ink`, `text-muted`, `border-line`, `text-accent`, `bg-accent/15` otomatis mengikuti tema. **Jangan** memakai varian `dark:` untuk warna; cukup token. Varian `dark:` hanya untuk menukar ikon matahari/bulan.

## 5. Elemen global

### 5.1 Latar grid blueprint
`body::before` (class `backdrop-grid` di `<body>`): `position: fixed; inset: 0; z-index: 0; pointer-events: none;` dua `linear-gradient` 1px warna `--grid-line` (horizontal & vertikal), `background-size: 72px 72px`, `mask-image: radial-gradient(ellipse at 50% 0%, #000 0%, transparent 75%)`. Semua konten di atasnya `position: relative; z-index: 1`.

### 5.2 Side rails (hanya ≥ 1500px)
- Kiri (`left: 36px`, `bottom: 0`, fixed, z 40): link **GitHub**, **LinkedIn**; teks vertikal (`writing-mode: vertical-rl; transform: rotate(180deg)`), Mono 12px, letter-spacing 0.12em, muted, padding 6px, gap 18px; di bawahnya garis `1px × 96px` warna muted. Hover: accent.
- Kanan (`right: 36px`): email `denyekayana@gmail.com` vertikal (tanpa rotate), hover accent + `translateY(-3px)`.

### 5.3 Skip link
"Skip to selected work" → `#work`. Tersembunyi (`top: -60px`), saat focus `top: 12px`, `left: 16px`, bg ink, teks paper, padding 10px 14px, 14px.

## 6. Spesifikasi komponen (urutan halaman)

### 6.1 Nav (sticky)
- `position: sticky; top: 0; z-index: 50`, tinggi **68px** (< 860px: **60px**), `background: var(--nav-bg)`, `backdrop-filter: saturate(1.2) blur(8px)`, `border-bottom: 1px solid var(--line)`.
- Isi `.wrap`, flex space-between, gap 24px.
- **Wordmark** (link ke `#top`, aria-label "Deny Wijaya — back to top"): `<` + `dw` + `/>`, Geist Mono 17px, gap 1px, min-height 44px. `<` dan `/>` warna accent weight 400; `dw` warna ink weight 500. Hover: `<` geser `translateX(-2px)`, `/>` `translateX(2px)`, transisi 0.2s.
- **Links** (desktop ≥ 860px), gap 4px: `01.Work` `02.Experience` `03.About` `04.Contact`. Nomor accent dengan `margin-right: 6px`; teks Mono 13px muted, padding 12px 14px. Hover → ink. Garis bawah: pseudo `::after` 1px di `bottom: 8px; left/right: 14px`, `scaleX(0)` → hover `scaleX(1)` warna currentColor (0.25s, origin kiri). **Aktif** (section di tengah viewport): teks ink, garis bawah `scaleX(1)` warna accent, `aria-current="true"`.
- **Actions** (gap 8px), urutan: Resume → ThemeToggle → menu button (mobile).
  - **Resume** (desktop saja): link ke PDF, `target="_blank"`, teks `Resume ↗`; min-height 40px, padding 0 16px, border 1px accent, teks accent, Mono 13px weight 500, radius 6px, gap 8px. Hover bg accent 14%.
  - **ThemeToggle**: lihat §7.1. 40×40px, radius 8px, border line, ikon 18px ink; hover border & ikon accent.
  - **Menu button** (< 860px saja): 44×44px, radius 8px, border line, transparan, dua garis 18×1.5px ink gap 6px; saat terbuka garis 1 `translateY(3.75px) rotate(45deg)`, garis 2 `translateY(-3.75px) rotate(-45deg)` (0.25s). `aria-expanded`, `aria-controls="mobile-menu"`, aria-label "Open menu"/"Close menu".
- **Mobile menu**: di bawah bar, `border-top` line, bg paper, padding 8px 20px 24px, animasi `drop` 0.22s. Item: flex space-between, min-height 56px, border-bottom line, 22px letter-spacing -0.01em; kanan: nomor Mono 12px muted (`01`…`04`). Item terakhir "Resume" dengan label `PDF ↗`. Klik item menutup menu. `Escape` menutup & mengembalikan fokus ke tombol. Saat dibuka, fokus ke link pertama.

### 6.2 Hero (`#top`)
- Section `.wrap`, `position: relative`, flex column justify-center, `min-height: calc(100vh - 68px)`, padding 72px 0 72px. < 860px: min-height none, padding-top 56px.
- **Orb**: absolute `top: 6%; right: -6%`, 560×560 (mobile 320×320), radius 50%, gradien orb (§4.1), `filter: blur(40px)`, `opacity: var(--orb-opacity)`, animasi `float`, `z-index: -1`, aria-hidden.
- **Baris atas** (flex space-between, wrap, gap 16px, padding-bottom 40px / mobile 28px):
  - Kiri: eyebrow muted **"Front-End & Mobile Developer · Bali, Indonesia"**.
  - Kanan (jika `available`): pill — inline-flex gap 10px, Mono 12.5px, border line, bg glass, padding 7px 14px, radius 999px. Titik 8×8px bulat `--ok`, `box-shadow: 0 0 0 4px var(--ok-ring), var(--ok-glow)`. Teks **"Open to remote roles"**.
- **Intro row** (flex, align start, gap `clamp(16px, 3vw, 40px)`; < 860px gap 16px), animasi `rise`:
  - **Avatar** (kiri): `<figure>` desktop **322×434px**, margin-top 4px, radius 10px, border 1px accent 55%, bg surface, overflow hidden, `box-shadow: var(--shadow-avatar)`. Gambar `dw-pixel.png`, `object-fit: cover; object-position: center; image-rendering: pixelated`, `priority`. Overlay scanline `::after`: `repeating-linear-gradient(0deg, rgba(0,0,0,.08) 0 1px, transparent 1px 3px)`. Skala responsif: lebar `clamp(96px, 22vw, 322px)`, rasio **322/434** tetap. < 860px: **96×129px**, radius 8px. Gambar **tidak** boleh dicrop bagian bawahnya lebih dari yang dihasilkan object-fit cover pada rasio ini.
  - **Teks** (kanan, `flex:1; min-width:0`): `> Hi, my name is` (Mono accent, margin-bottom 22px; mobile 12px) lalu H1 **"Deny Wijaya."** + baris kedua (block, muted) **"I build software businesses run on"** diakhiri **caret**: inline-block `0.07em × 0.8em`, `margin-left: .08em`, `vertical-align: -.04em`, bg accent, animasi `blink`.
- **Hero body**: grid 12 kolom, margin-top 56px (mobile 32px), row-gap 40px, animasi `rise` delay 0.12s.
  - Kolom 1–6: lede **"Front-end and mobile developer turning manual operations into reliable products, from POS and booking systems to ERP and supply-chain platforms. React, TypeScript, Next.js and Flutter."** lalu CTA (margin-top 36px, gap 12px, wrap):
    - **Primary** `View selected work ↓` → `#work`: min-height 52px, padding 0 24px, radius 8px, Mono 14px 500, bg accent, teks on-accent, `box-shadow: var(--shadow-btn)`. Hover: bg ink, teks paper. Panah `↓` hover `translateY(2px)`.
    - **Ghost** `Get in touch` → `#contact`: border line, bg transparan (light: bg surface), teks ink. Hover: border & teks accent.
    - < 860px: kedua tombol `flex: 1 1 auto`.
  - Kolom 8–12 (`align-self: end`; ≤ 1100px kolom 7–12): **kartu terminal** — border line, radius 14px, bg glass + blur 14px, `box-shadow: var(--shadow-term)`, overflow hidden.
    - Bar: flex gap 7px, padding 12px 16px, border-bottom line; 3 titik 10px bulat `--dot`; kanan (`margin-left:auto`) `deny.config.ts` Mono 12px muted, tanpa uppercase, letter-spacing 0.02em.
    - Body `<dl>`: padding 18px 20px 20px, Mono 13.5px, line-height 1.9. Tiap baris flex gap 10px: `dt` accent diikuti `:` muted; `dd` ink. Baris:
      ```
      focus:      "front-end & mobile"
      core:       ["React", "TypeScript", "Next.js"]
      also:       ["Vue.js", "Flutter", "Go"]
      experience: "5+ years"
      based:      "Denpasar, Bali · GMT+8"
      status:     "open_to_remote"      ← dt warna muted; tampil hanya jika available
      ```
- **Scroll cue**: margin-top 72px, flex gap 14px, eyebrow muted **"Scroll to explore"**, diawali garis 48×1px accent.

### 6.3 Section heading (dipakai Work, Experience, About, Expertise)
Flex wrap, align center, gap 12px 18px, padding-bottom 56px (mobile 36px). Urutan: nomor (Mono accent) → H2 → garis `::after` (`flex: 1 1 120px; height: 1px; background: linear-gradient(90deg, var(--line), transparent)`) → intro opsional (`flex-basis: 100%`, order 3, muted 16px, max 60ch).

### 6.4 Selected Work (`#work`, nomor `01.`)
- Title **"Selected work"**, intro **"Business-critical products, chosen for the problems behind them rather than the volume."**
- **Featured project** (×4, urutan §8). Tiap `<article id>`:
  - Grid 12 kolom, gap 24px, `align-items: center`. Jarak antar featured: **120px**.
  - **Visual**: kolom 1–8, row 1, radius 14px, overflow hidden, border line. Isinya screenshot (rasio **16:10**) atau placeholder (§6.9). Overlay `::after`: `background: color-mix(in srgb, var(--accent) var(--tint-amount), transparent); mix-blend-mode: var(--tint-blend)`; saat hover article → `opacity: 0` (0.4s).
  - **Card**: kolom 7–12, row 1 (menimpa visual), z-index 2, `text-align: right`, flex column `align-items: flex-end`, gap 14px.
  - **Reversed** (proyek ke-2 dan ke-4): visual kolom 5–12, card kolom 1–6, rata kiri.
  - Isi card berurutan:
    1. Label `Featured project · 01` (nomor 2 digit).
    2. H3 nama proyek.
    3. **Panel**: glass + blur 16px, border line, radius 14px, padding 24px 26px, `box-shadow: var(--shadow-panel)`, teks rata kiri 16px/1.6. Saat hover article: border `color-mix(accent 55%, line)` (0.3s). Isi: paragraf ringkasan, lalu `<ul>` (margin-top 14px, gap 6px, 14.5px muted, tiap li diawali `▹ ` accent).
    4. Tag stack (`<ul>` flex wrap gap 6px 18px, Mono 13px muted; justify end / start untuk reversed).
    5. Link (jika ada): Mono 13px ink, `border-bottom: 1px solid var(--accent)`, padding 6px 0, min-height 32px, teks `domain ↗`, `target="_blank" rel="noopener"`. Hover accent.
  - **< 860px**: satu kolom; visual di atas; card di bawah dengan `margin-top: -48px`, padding 0 12px, rata kiri, tag justify start.
  - **Project notes** (hanya Karna): di bawah grid (full width, margin-top 28px, flex column gap 20px). Tombol toggle: inline-flex gap 12px, min-height 44px, transparan, `border-bottom: 1px solid var(--accent)`, Mono 13px ink, hover accent; teks `+ Read project notes` / `− Hide project notes` (simbol di span lebar 14px). `aria-expanded`/`aria-controls`. Panel: grid 2 kolom gap 0 40px (mobile 1 kolom), border-top line, animasi `drop` 0.25s; tiap note padding 20px 0, border-bottom line; judul Mono 12px uppercase accent margin-bottom 6px; isi 15px.
- **Other noteworthy projects**: margin-top 140px (mobile 88px).
  - Judul center **"Other noteworthy projects"** `clamp(24px, 2.4vw, 32px)` 500 -0.02em, margin-bottom 8px; sub center eyebrow muted **"Client & product work"**, margin-bottom 40px.
  - Grid **3 kolom** (≤ 1100px: 2; < 860px: 1), gap 16px.
  - Kartu: flex column gap 14px, padding 26px 24px, border line, radius 14px, bg surface, height 100%. Hover: `translateY(-6px)`, border accent 50%, shadow hover (§4.1); transisi 0.3s.
  - Atas kartu: ikon folder SVG 34px stroke 1.4 accent (path `M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`) + label jenis (eyebrow muted) di kanan.
  - H4 19px 500 -0.01em; paragraf 14.5px muted `flex: 1`; tag Mono 12px muted gap 4px 12px.

### 6.5 Experience (`#experience`, nomor `02.`)
- Title **"Where I’ve worked"**, intro **"Five-plus years building business-critical web and mobile software in Bali."**
- Layout: grid `240px minmax(0,1fr)`, gap 40px, max-width 980px.
- **Tablist** (WAI-ARIA tabs): kolom vertikal, `border-left: 1px solid var(--line)`. Tab: Mono 13.5px muted, padding 0 20px, min-height 48px, rata kiri, transparan. Hover: ink + bg surface. **Aktif**: accent, bg accent 8%, indikator `::before` 2px di kiri (`left: -1px`, full height) warna accent dengan `box-shadow: 0 0 12px var(--accent)`. Keyboard: ↑/↓/←/→ pindah tab, Home/End; roving tabindex.
- **< 860px**: tablist jadi baris horizontal (scroll-x), `border-bottom` line, tab `white-space: nowrap`, indikator pindah ke bawah (`bottom: -1px`, tinggi 2px, full width).
- **Panel**: animasi `rise` 0.35s setiap ganti tab. H3 `{role} ` + span accent `@ {company}`; periode eyebrow muted margin-top 6px; `<ul>` margin-top 22px gap 12px 16px, tiap li grid `20px 1fr` dengan `▹` accent; tag stack margin-top 22px.

### 6.6 About (`#about`, nomor `03.`)
- Title **"Engineering with an eye for detail."** (tanpa intro).
- Grid 12 kolom, row-gap 48px:
  - **Kolom 1–3 — figure**: slot potret rasio **3:4**, radius 14px, hanya tampil kalau foto asli Deny sudah ada (`profile.aboutPhoto`). Kalau belum ada foto, potret dan figcaption tidak dirender sama sekali, tanpa placeholder (diminta pemilik situs, 14 Okt 2026). Figcaption eyebrow muted **"Deny Wijaya · Denpasar, Bali"** margin-top 12px. Di bawahnya `<dl>` (margin-top 28px bila ada potret, border-top line), tiap grup padding 12px 0, border-bottom line, `dt` eyebrow muted, `dd` 14px/1.5 margin-top 4px:
    - Education: "Bachelor of Information Systems, ITB STIKOM Bali" / "Diploma in Information Management, Politeknik Negeri Bali"
    - Languages: "Indonesian (native), English (professional working)"
  - **Kolom 5–9 — copy**: flex column gap 22px, 3 paragraf (§8). Paragraf 1 ink 23px; paragraf 2–3 soft 19px.
  - **Kolom 5–12 — principles**: `<ul>` grid 2 kolom gap 0 40px, margin-top 24px, border-top line. Tiap li grid `40px 1fr` gap 8px, padding 20px 0, border-bottom line; nomor Mono 12px accent (`01`–`04`); judul 17px 500; deskripsi 15px muted.
- < 860px: semua satu kolom, figure max-width 280px, principles 1 kolom, paragraf 18px.

### 6.7 Expertise (`#expertise`, nomor `03.1`)
- Title **"Tools I reach for"**, intro **"Curated to what I use in production work. The projects above are the evidence."**
- Grid **5 kolom** (≤ 1100px: 3; < 860px: 2; ≤ 420px: 1), gap 24px (mobile 32px 16px).
- Kartu `<dl>`: border line, radius 14px, padding 20px, bg surface. `dt` eyebrow accent margin-bottom 14px. `dd` 15px soft, padding 5px 0, tanpa border, diawali `▹ ` accent.
- Tidak ada progress bar, rating, atau logo teknologi.

### 6.8 Contact + Footer (`#contact`, nomor `04.`)
- Section full width, margin-top 160px (mobile 104px), bg transparan, `border-top: 1px solid var(--line)`, `text-align: center`, overflow hidden, relative.
- Glow `::before`: absolute, center horizontal, `top: -260px`, 900×560px, radius 50%, gradien glow contact (§4.1).
- `.wrap` padding-top 120px (mobile 80px), padding-bottom 56px.
- **Stack** (max-width 720px, center, flex column gap 22px):
  - `04. What’s next?` Mono 16px accent (tanpa uppercase).
  - H2 **"Let’s build something."**
  - Copy **"I’m open to remote roles and freelance projects. Whether you have a product to build or a question, my inbox is open."**
  - Tombol **`Say hello →`** (`mailto:denyekayana@gmail.com`): inline-flex gap 14px, min-height 64px, padding 0 32px, margin-top 12px, transparan, border 1px accent, teks accent, radius 8px, Mono 16px 500. Hover: bg accent 14%, `box-shadow: 0 0 40px color-mix(in srgb, var(--accent) 40%, transparent)`, panah `translateX(4px)`. < 860px: full width, `justify-content: space-between`.
- **Channels** `<ul>` (rata kiri): grid 4 kolom, margin-top 96px (mobile 64px), border-top line; li setelah pertama `border-left` line. Tiap item link flex column gap 8px, padding 24px 24px 28px 0 (li berikutnya padding-left 24px), min-height 120px. Label eyebrow muted; nilai 17px ink `word-break: break-word`; hover nilai accent.
  - Email → `denyekayana@gmail.com`
  - LinkedIn → `in/denywijaya14 ↗`
  - GitHub → `deny-wijaya ↗`
  - Resume → `Download CV (PDF) ↗` (sembunyikan item jika `resumeUrl` null)
  - < 860px: 1 kolom, border-left diganti border-top, padding 18px 0, min-height 0.
- **Footer**: border-top line; isi `.wrap` flex space-between wrap gap 16px, padding 28px 0 36px, 14px muted:
  - `© {tahun berjalan} Deny Wijaya`
  - `Designed and built with care in Bali.`
  - Link: LinkedIn, GitHub, `Top ↑` (`#top`), padding 10px, min-height 44px, hover accent.

### 6.9 Placeholder gambar
Dipakai selama screenshot belum ada. Wajib jelas sebagai placeholder, bukan UI palsu.
- Container relative, flex center, rasio sesuai slot, bg `--surface` (varian warm: `--ph-warm`), grid 48px dari garis `rgba(143,143,160,.08)` 1px.
- Tanda sudut: `::before` kiri-atas & `::after` kanan-bawah, 22×22px, border 1px accent (`top/left: 16px`, `bottom/right: 16px`).
- Label tengah: bg paper, border line, radius 8px, padding 10px 14px, max-width 80%, center; baris 1 Mono 12px uppercase ink; baris 2 Mono 12px muted normal-case.
- `role="img"` + `aria-label`.

## 7. Perilaku

### 7.1 Light/Dark mode
- Atribut `data-theme="light|dark"` di `<html>`.
- **Script anti-flash** di `<head>` (inline, sebelum paint): baca `localStorage.theme`; jika tidak ada, ikuti `prefers-color-scheme` (light → light, selain itu dark); jika error → dark. `<html suppressHydrationWarning>`.
- **ThemeToggle** (client): toggle atribut + simpan `localStorage.theme` (bungkus try/catch). Ikon: **matahari** tampil di dark (aksi → light), **bulan** tampil di light; tukar dengan varian `dark:hidden`/`dark:block` supaya tidak ada hydration mismatch. aria-label dinamis "Switch to light theme" / "Switch to dark theme".
- `body` transisi `background-color .3s ease, color .3s ease`.
- `viewport.themeColor`: light `#F7F7F4`, dark `#0A0A0D`.

### 7.2 Active nav
IntersectionObserver pada `#work`, `#experience`, `#about`, `#contact` dengan `rootMargin: "-35% 0px -60% 0px"`.

### 7.3 Lainnya
- Semua link eksternal `target="_blank" rel="noopener"`.
- Tidak ada scroll hijacking, parallax, custom cursor, atau intro panjang.
- Touch target minimal 44px untuk elemen interaktif di mobile.

## 8. Konten (`content/site.ts`)

Semua teks bahasa Inggris, **salin persis**.

### Profil
- name: `Deny Wijaya` · shortName: `dw` · title: `Front-End & Mobile Developer`
- location: `Denpasar, Bali, Indonesia` · timezone: `GMT+8`
- email: `denyekayana@gmail.com`
- GitHub: `https://github.com/deny-wijaya` · LinkedIn: `https://www.linkedin.com/in/denywijaya14/`
- available: `true` · availabilityLabel: `Open to remote roles`
- resumeUrl: `/cv/CV-Deny-Wijaya-2026.pdf`
- portrait: `/images/dw-pixel.png`, alt `Pixel-art portrait of Deny Wijaya, smiling, in a white shirt against a blue sky`

### Featured projects (urutan wajib)

**01 · Karna** (normal)
- Summary: `An operations platform for appointment-based service businesses (barbershops, salons, spas and beauty clinics), from a single outlet to multi-outlet chains. Released and in its sales phase.`
- Points: `Booking and staff scheduling` · `POS with automatic commissions and tips` · `Inventory with recipe-based stock deduction` · `Memberships, role-based access, 30+ reports`
- Tags: `Flutter` `Vue.js` `Mobile app` `Web admin`
- Link: `karna.pro` → `https://karna.pro`
- Placeholder: `Karna — web admin & staff app` / `Replace with real screenshots from karna.pro`
- Notes:
  - Context — `Appointment-based businesses need bookings, staff, sales and stock to work as one system, whether they run one outlet or a chain.`
  - Users — `Owners and managers work in the web admin; stylists and therapists use the mobile app day to day.`
  - Mobile app · Flutter — `Schedules, visit details, customer notes and earnings for stylists and therapists.`
  - Web admin · Vue.js — `Booking and staff scheduling, POS, automatic commissions and tips, recipe-based inventory, memberships, role-based access and 30+ business reports.`
  - Constraints — `One product serving both single outlets and multi-outlet chains, with different roles seeing different data.`
  - Outcome — `Taken from development to a fully featured release, now in its sales phase, kept stable with ongoing fixes.`

**02 · Bali Coast Trail** (reversed, placeholder warm)
- Summary: `The event site for an international trail race in East Bali, listed on the UTMB Index and ITRA.`
- Points: `Four race categories with local and foreign pricing` · `Race info, rules, gear and accommodation pages` · `SEO, social sharing, responsive and accessible`
- Tags: `Next.js` `Event site`
- Link: `balicoasttrail.com` → `https://balicoasttrail.com`
- Placeholder: `Bali Coast Trail — hero section` / `Replace with a real crop of balicoasttrail.com`

**03 · Bali Trail Running** (normal)
- Summary: `A registration platform serving multiple trail running events in Bali, from browsing events to paying for a race slot.`
- Points: `Event listings and participant sign-up` · `Race category selection and ticketing` · `Online payment, including bank-specific promos`
- Tags: `Web platform` `Registration` `Payments`
- Link: `app.balitrailrunning.com` → `https://app.balitrailrunning.com`
- Placeholder: `Bali Trail Running — registration flow` / `Replace with a real screenshot of app.balitrailrunning.com`

**04 · Bali Bird Park** (reversed, placeholder warm, tanpa link)
- Summary: `A mobile rewards app for the tour guides who bring visitors to Bali Bird Park: scan a barcode ticket to award or redeem guide points.`
- Points: `Barcode ticket scanning to award points` · `Point redemption for guides` · `Built for fast, accurate scanning at peak visitor times`
- Tags: `Flutter` `REST API` `Mobile`
- Placeholder: `Bali Bird Park — guide rewards app` / `Replace with real phone screenshots`

> Bali Coast Trail dan Bali Trail Running adalah **dua platform berbeda**; jangan digabung.

### Other noteworthy projects
| Nama | Jenis | Ringkasan | Tags |
|---|---|---|---|
| Dinaran Gold | Web admin | `Admin dashboard for a gold trading app: real-time statistics, live gold prices, member and transaction monitoring.` | React, TypeScript, Tailwind |
| MS Glow Aesthetic Clinic | Web POS | `Digitized patient registration, barcode treatment tracking and pricing across roles.` | React, Next.js, Tailwind |
| Luks Pet | Web POS | `POS and online booking for pet grooming, built for concurrent bookings; plus the company site.` | Vue.js, Vuetify, Laravel |

### Experience (urutan tab)
1. Tab `Karna` — **Software Developer, Mobile & Web Admin** @ **PT Karna Pangkal Kaya** · `2023 — Present`
   - `Built the Flutter app stylists and therapists use for schedules, visit details, customer notes and earnings.`
   - `Built the Vue.js web admin: booking, staff scheduling, POS, commissions, inventory, memberships and 30+ reports.`
   - `Took Karna from development to a fully featured release, now in its sales phase.`
   - Tags: Flutter, Vue.js
2. Tab `Urban Beauty` — **Front-End Developer** @ **Urban Beauty Indonesia** · `Aug 2019 — Present · Denpasar`
   - `Led front-end development of the Urban Distribution System, a semi-ERP used by accounting, warehouse, purchasing and sales teams.`
   - `Built the MS Glow product traceability platform, including QR generation for 1M+ codes per batch.`
   - `Ran user interviews with internal teams to improve complex, multi-role workflows.`
   - Tags: React, TypeScript, Vue.js, Material UI, Go
3. Tab `Destar Studio` — **Front-End & WordPress Developer** @ **Destar Studio** · `Feb 2018 — Jul 2019 · Denpasar`
   - `Built client websites and front-ends with Vue.js, integrated with REST APIs.`
   - `Delivered e-commerce sites and company profiles on WordPress, including custom themes.`
   - Tags: Vue.js, WordPress

### About
1. `Most of my work sits between a design file and a production codebase. I care about getting that translation right: spacing that matches the spec, states nobody drew, and layouts that hold up at every width, not just the two in the mockup.`
2. `Much of what I’ve built replaces a manual process: clinic registrations, warehouse distribution, salon commissions. That means working directly with business owners and end users, running interviews, and asking what a feature is for before deciding how to build it.`
3. `I build interfaces as small, typed, reusable components with clear boundaries, and I use AI-assisted development with Claude every day to move faster while keeping code clean, tested and maintainable.`

Principles: `Design fidelity` — `Accurate to the spec, considered where the spec is silent.` · `Component architecture` — `Reusable building blocks with predictable APIs.` · `Responsive by default` — `Designed for touch, keyboard and every width between.` · `Product context` — `Features shaped by the business problem they solve.`

### Expertise
| Grup | Item |
|---|---|
| Frontend | React, Next.js, TypeScript, JavaScript, Vue.js, HTML & CSS |
| UI systems | Tailwind CSS, Material UI, Vuetify, Storybook, Responsive design |
| Mobile | Flutter, Dart, Bloc, Widgetbook |
| Back-end & data | REST APIs, Node.js, Go (working), Laravel, Firebase |
| Workflow | Git & GitHub, Vercel, Webpack, Figma, AI-assisted dev (Claude) |

### Integritas konten
Jangan menambah metrik, testimoni, jumlah user, sertifikasi, atau klaim yang tidak tertulis di atas. Nomor telepon **tidak** ditampilkan di halaman.

## 9. SEO, metadata, aset

- `metadataBase`: `process.env.NEXT_PUBLIC_SITE_URL ?? "https://denywijaya.com"`.
- Title: `Deny Wijaya — Front-End & Mobile Developer`.
- Description: `Deny Wijaya is a front-end and mobile developer in Bali building business-critical web and mobile products with React, TypeScript, Next.js and Flutter.`
- `alternates.canonical: "/"`, Open Graph (`type: website`, `siteName`, `locale: en_US`), Twitter `summary_large_image`.
- `app/opengraph-image.tsx` (1200×630, `next/og`): latar `#0A0A0D`, grid samar, `<dw/>` (aksen `#6C8CFF`) kiri atas, nama besar putih `#EDEDF2`, subjudul `Front-End & Mobile Developer · Bali, Indonesia` warna `#8F8FA0`.
- `app/icon.svg`: kotak 64×64 radius 14 bg `#0A0A0D`, teks `dw` Mono `#6C8CFF`.
- JSON-LD `Person` (name, jobTitle, url, email, address Denpasar/Bali/ID, sameAs GitHub & LinkedIn).
- Heading: satu H1 (hero), H2 per section, H3 per proyek/job.

## 10. Kriteria penerimaan (acceptance)

Visual
- [ ] Dark mode identik dengan `reference/Futuristic.dc.html`; light mode identik dengan `reference/FuturisticLight.dc.html` (warna sesuai §4.1).
- [ ] Wordmark tampil `<dw/>`, avatar pixel di **kiri** teks "Hi, my name is" (bukan di atas), ukuran desktop 322×434.
- [ ] 4 featured project dengan pola normal/reversed bergantian; card menimpa visual di desktop.
- [ ] Tidak ada horizontal scroll di 375, 430, 768, 1024, 1280, 1440px.

Tema
- [ ] Tidak ada flash tema salah saat reload (cek dengan cache disabled).
- [ ] Pilihan tema tersimpan setelah reload; tanpa pilihan → ikut OS.
- [ ] Tidak ada warning hydration di console.

Aksesibilitas
- [ ] Kontras teks ≥ 4.5:1 (teks besar ≥ 3:1) di kedua tema.
- [ ] Semua kontrol bisa dipakai keyboard; focus ring terlihat; tabs Experience mendukung panah.
- [ ] Mobile menu: Escape menutup, fokus kembali ke tombol.
- [ ] `prefers-reduced-motion` mematikan semua animasi.

Teknis
- [ ] `next build` lulus tanpa error TypeScript.
- [ ] Lighthouse (mobile) Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] Gambar hero memakai `priority`; tidak ada CLS dari font/gambar.
- [ ] Semua link berfungsi; tidak ada link `#` kosong.

## 11. Urutan pengerjaan untuk Claude Code

1. Scaffold project (§2–3), salin aset dari `assets/` ke `public/`.
2. Tulis `globals.css` persis §4.4 + komponen utilitas (`.wrap`, `.eyebrow`, `.glass`, placeholder, tint, scanlines, orb, caret, keyframes).
3. `layout.tsx` (font, metadata, script tema) dan `content/site.ts` (§8).
4. Bangun komponen sesuai urutan §6, cek tiap section di dark lalu light.
5. Responsif (§4.3 breakpoints) dan aksesibilitas (§10).
6. OG image, favicon, JSON-LD.
7. Jalankan `next build`, cek kriteria §10, perbaiki.

## 12. Di luar cakupan
Blog, CMS, form kontak (pakai mailto), analytics, i18n, halaman case study terpisah.
