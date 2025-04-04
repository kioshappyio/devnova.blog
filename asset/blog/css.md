# Dokumentasi Lengkap CSS

![CSS3 Logo](https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg)

## Daftar Isi
1. [Pengantar CSS](#1-pengantar-css)  
2. [Cara Menggunakan](#2-cara-menggunakan)  
3. [Sintaks Dasar](#3-sintaks-dasar)  
4. [Selektor CSS](#4-selektor-css)  
5. [Box Model](#5-box-model)  
6. [Layout Modern](#6-layout-modern)  
7. [Responsif](#7-responsif)  
8. [Animasi](#8-animasi)  
9. [Variabel CSS](#9-variabel-css)  
10. [Best Practices](#10-best-practices)  
11. [Referensi](#11-referensi)  

---

## 1. Pengantar CSS
**CSS (Cascading Style Sheets)** adalah bahasa untuk mendesain tampilan web. Fungsi utama:
- 🎨 Mengatur tata letak dan warna
- 📱 Membuat desain responsif
- 🌀 Menambahkan animasi
- 🧩 Mengorganisir komponen UI

**Hubungan dengan HTML:**
```html
<!-- HTML -->
<button class="btn">Klik Saya</button>

<!-- CSS -->
<style>
.btn {
    background: blue;
    color: white;
}
</style>
```

**Fitur Modern:**
- 🟦 Flexbox & Grid
- 🟪 Custom Properties
- 🟨 Media Queries
- 🟧 Transform 3D

---

## 2. Cara Menggunakan
### 1. Eksternal (Direkomendasikan)
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

### 2. Internal
```html
<style>
    body {
        font-family: 'Arial';
    }
</style>
```

### 3. Inline (Hindari)
```html
<p style="color: red">Teks Merah</p>
```

---

## 3. Sintaks Dasar
```css
selector {
    property: value; /* Komentar */
}
```

**Contoh:**
```css
/* 🟦 Selektor Class */
.card {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* 🟧 Selektor ID */
#header {
    background: #333;
}

/* 🟩 Pseudo-class */
a:hover {
    color: orange;
}
```

---

## 4. Selektor CSS
### Jenis-jenis Selektor
| Tipe | Contoh | Deskripsi |
|------|--------|------------|
| Universal | `*` | Semua elemen |
| Class | `.btn` | Elemen dengan class |
| Attribute | `[type="text"]` | Berdasarkan atribut |
| Pseudo | `:hover` | State khusus |

**Contoh Kombinasi:**
```css
/* Child Selector */
nav > ul { 
    list-style: none;
}

/* Adjacent Sibling */
h2 + p {
    margin-top: 0;
}
```

---

## 5. Box Model
![Box Model](https://mdn.mozillademos.org/files/16558/box-model.png)
```css
.element {
    width: 300px;         /* 🟦 Lebar konten */
    padding: 20px;        /* 🟩 Jarak dalam */
    border: 2px solid;    /* 🟪 Garis tepi */
    margin: 10px;         /* 🟧 Jarak luar */
    box-sizing: border-box; /* 🎯 Hitung ukuran */
}
```

**Tips Layout:**
```css
* {
    box-sizing: border-box; /* Ubah model default */
    margin: 0;            /* Reset margin */
}
```

---

## 6. Layout Modern
### Flexbox
```css
.container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.item {
    flex: 1;  /* 🟦 Pembagian ruang */
}
```

### CSS Grid
```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}

.grid-item {
    grid-column: span 2;
}
```

---

## 7. Responsif
### Media Queries
```css
/* 📱 Mobile First */
.container {
    padding: 10px;
}

/* 🖥️ Desktop */
@media (min-width: 768px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

### Unit Responsif
```css
.element {
    font-size: 2rem;     /* 🟦 Relatif ke root */
    width: 80vw;         /* 🟪 Lebar viewport */
    padding: 2em;        /* 🟧 Relatif ke font parent */
}
```

---

## 8. Animasi
### Transisi
```css
.button {
    transition: transform 0.3s ease-in-out;
}

.button:hover {
    transform: scale(1.05);
}
```

### Keyframes
```css
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.loader {
    animation: spin 2s infinite linear;
}
```

---

## 9. Variabel CSS
```css
:root {
    --primary: #2196F3;    /* 🟦 Deklarasi variabel */
    --max-width: 1200px;
}

.element {
    color: var(--primary); /* 🟪 Penggunaan variabel */
    max-width: var(--max-width);
}
```

---

## 10. Best Practices
### ✅ Yang Harus Dilakukan
```css
/* Organisasi File */
styles/
├── base/
│   ├── _reset.css
│   └── _typography.css
├── components/
│   ├── _button.css
```

### ❌ Yang Harus Dihindari
```css
/* !important Overuse */
.text { color: red !important; }

/* Selektor Terlalu Spesifik */
body div#header nav ul li a { ... }
```

---

## 11. Referensi
| Sumber | Link | Deskripsi |
|--------|------|-----------|
| MDN | [CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS) | Dokumentasi Resmi |
| CSS Tricks | [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) | Panduan Visual |
| Can I Use | [Browser Support](https://caniuse.com) | Kompatibilitas |

```css
/* Contoh Framework */
@tailwind base; /* 🟦 Tailwind CSS */
@layer components { ... }
```

---

**Kredit**  
Dokumentasi ini disusun oleh **[This Key](https://github.com/kioshappyio)** from **[DevNova](https://devnova.id)** yang mendukung edukasi teknologi terbuka 🚀  

*"CSS adalah seni yang membuat web menjadi hidup"* 🎨