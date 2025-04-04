# Dokumentasi Lengkap HTML

![HTML5 Logo](https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg)

## Daftar Isi
1. [Pengantar HTML](#1-pengantar-html)  
2. [Struktur Dasar](#2-struktur-dasar)  
3. [Elemen Penting](#3-elemen-penting)  
4. [Atribut Khusus](#4-atribut-khusus)  
5. [Formulir Interaktif](#5-formulir-interaktif)  
6. [Tabel & Daftar](#6-tabel--daftar)  
7. [Multimedia](#7-multimedia)  
8. [Semantik HTML5](#8-semantik-html5)  
9. [SEO & Metadata](#9-seo--metadata)  
10. [Best Practices](#10-best-practices)  
11. [Referensi](#11-referensi)  

---

## 1. Pengantar HTML
**HTML (HyperText Markup Language)** adalah tulang punggung web modern 🌐. Fungsi utama:
- 🏗️ Membangun struktur halaman web
- 🖼️ Menampilkan konten (teks/gambar/video)
- 🤝 Menjadi dasar integrasi CSS & JavaScript

**Evolusi HTML:**
| Versi | Tahun | Fitur Utama |
|-------|-------|-------------|
| HTML4 | 1997  | Table layout |
| XHTML | 2000  | XML syntax   |
| HTML5 | 2014  | Semantic tags, API |

---

## 2. Struktur Dasar
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <!-- 🎯 Metadata & konfigurasi -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🛠️ Dokumentasi HTML</title>
    <link rel="icon" href="favicon.ico">
</head>
<body>
    <!-- 🎨 Konten utama -->
    <h1>Selamat Datang!</h1>
    <p>Belajar HTML itu menyenangkan 🚀</p>
</body>
</html>
```

**Penjelasan:**
1. `<!DOCTYPE html>`: Deklarasi versi HTML5  
2. `<html>`: Root element dengan atribut bahasa  
3. `<head>`: Berisi informasi non-visual  
4. `<meta charset>`: Encoding karakter UTF-8  
5. `<meta viewport>`: Optimasi mobile-first 📱  

---

## 3. Elemen Penting
### Teks & Heading
```html
<h1>Judul Utama</h1>  <!-- 🟢 Hanya 1 per halaman -->
<h2>Sub-Judul</h2>
<p>Teks <strong>penting</strong> dan <em>penekanan</em></p>
<blockquote cite="https://example.com">Kutipan inspiratif</blockquote>
```

### Gambar & Link
```html
<!-- 🖼️ Gambar Responsif -->
<img src="logo.png" 
     alt="Logo Perusahaan" 
     width="200"
     loading="lazy">

<!-- 🔗 Link Eksternal -->
<a href="https://example.com" 
   target="_blank" 
   rel="noopener noreferrer">
    Kunjungi Situs
</a>
```

---

## 4. Atribut Khusus
| Atribut | Contoh | Fungsi |  
|---------|--------|--------|  
| `data-*` | `data-user="123"` | 🗃️ Penyimpanan data kustom |  
| `aria-*` | `aria-label="Menu"` | ♿ Aksesibilitas |  
| `contenteditable` | `contenteditable="true"` | ✏️ Editable content |  
| `draggable` | `draggable="true"` | 🖱️ Drag & Drop API |  

**Contoh Advance:**
```html
<div class="card" 
     data-price="299000" 
     aria-describedby="price-desc">
    <p id="price-desc">Harga termasuk PPN</p>
</div>
```

---

## 5. Formulir Interaktif
```html
<form id="signup" action="/submit" method="POST" novalidate>
    <fieldset>
        <legend>📝 Form Registrasi</legend>
        
        <label for="email">📧 Email:</label>
        <input type="email" 
               id="email" 
               name="email"
               required
               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
        
        <label for="birthdate">🎂 Tanggal Lahir:</label>
        <input type="date" 
               id="birthdate" 
               name="birthdate"
               min="1950-01-01" 
               max="2024-12-31">
        
        <button type="submit">🚀 Daftar Sekarang</button>
    </fieldset>
</form>
```

---

## 6. Tabel & Daftar
### Tabel Kompleks
```html
<table class="data-table">
    <caption>📊 Data Karyawan</caption>
    <thead>
        <tr>
            <th scope="col">Nama</th>
            <th scope="col">Posisi</th>
            <th scope="col">Gaji</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>this key</td>
            <td>Developer</td>
            <td>Rp15.000.000</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">🔄 Update terakhir: April 2024</td>
        </tr>
    </tfoot>
</table>
```

---

## 7. Multimedia
### Video Responsif
```html
<video controls width="100%" poster="preview.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <track label="English" kind="subtitles" srclang="en" src="subs.vtt">
    ⚠️ Browser tidak mendukung video
</video>
```

### Gambar Adaptif
```html
<picture>
    <source media="(min-width: 1200px)" srcset="large.jpg">
    <source media="(min-width: 768px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Gambar Responsif">
</picture>
```

---

## 8. Semantik HTML5
```html
<header>
    <nav aria-label="Navigasi utama">...</nav>
</header>

<main>
    <article>
        <h1>📰 Artikel Terbaru</h1>
        <section>
            <h2>💡 Bagian Penting</h2>
            <p>Konten artikel...</p>
        </section>
    </article>
    
    <aside>
        <h2>📌 Info Terkait</h2>
        <p>Konten tambahan...</p>
    </aside>
</main>

<footer>
    <address>📧 contact@example.com</address>
</footer>
```

**Manfaat:**
- 🕶️ Meningkatkan aksesibilitas
- 🔍 Optimasi SEO
- 🧩 Kode lebih terstruktur

---

## 9. SEO & Metadata
```html
<head>
    <!-- Meta Dasar -->
    <meta name="description" content="Dokumentasi HTML lengkap">
    <meta name="author" content="This Key">
    
    <!-- Open Graph -->
    <meta property="og:title" content="HTML Guide">
    <meta property="og:image" content="thumbnail.jpg">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    
    <!-- Skema Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Panduan HTML"
    }
    </script>
</head>
```

---

## 10. Best Practices
### ✅ Yang Harus Dilakukan
```html
<!-- Alt text deskriptif -->
<img src="chart.jpg" alt="Grafik pertumbuhan Q1 2024">

<!-- Validasi form HTML5 -->
<input type="email" required placeholder="user@example.com">

<!-- Semantic markup -->
<article>
    <h2>Judul Artikel</h2>
    <p>Konten...</p>
</article>
```

### ❌ Yang Harus Dihindari
```html
<!-- Tag usang -->
<center>Teks tengah</center>
<font size="5">Teks besar</font>

<!-- Inline style -->
<p style="color: red; font-size: 20px;">Teks merah</p>

<!-- Div soup -->
<div class="header">...</div>
<div class="nav">...</div>
```

---

## 11. Referensi
| Sumber | Deskripsi |  
|--------|-----------|  
| [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML) | Dokumentasi resmi |  
| [HTML Living Standard](https://html.spec.whatwg.org/) | Spesifikasi terkini |  
| [W3C Validator](https://validator.w3.org/) | Validator markup |  
| [HTML5 Doctor](http://html5doctor.com/) | Panduan semantik |  

```html
<!-- Contoh Komentar Kolaboratif -->
<!-- 
    TIM: DevNova
    TANGGAL: 2024-04-03
    FITUR: Menambahkan section SEO
    CATATAN: Perlu update structured data
-->
```

---

**Kredit**  
Dokumentasi ini disusun oleh **[This Key](https://github.com/kioshappyio)** from **[DevNova](https://devnova.id)** yang mendukung edukasi teknologi terbuka 🚀 

*"Setiap tag adalah cerita, setiap elemen adalah seni"* 🎨