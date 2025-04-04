# Dokumentasi Lengkap JavaScript

![JavaScript Logo](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png)

## Daftar Isi
1. [Pengantar JavaScript](#1-pengantar-javascript)  
2. [Cara Menggunakan JavaScript](#2-cara-menggunakan-javascript)  
3. [Dasar Pemrograman](#3-dasar-pemrograman)  
4. [Tipe Data & Struktur](#4-tipe-data--struktur)  
5. [Manipulasi DOM](#5-manipulasi-dom)  
6. [Event Handling](#6-event-handling)  
7. [Asynchronous Programming](#7-asynchronous-programming)  
8. [Modern JavaScript (ES6+)](#8-modern-javascript-es6)  
9. [Best Practices](#9-best-practices)  
10. [Referensi Tambahan](#10-referensi-tambahan)  

---

## 1. Pengantar JavaScript
**JavaScript** adalah bahasa pemrograman tingkat tinggi yang digunakan untuk:  
- 🖥️ Membuat halaman web interaktif  
- 📱 Mengembangkan aplikasi web/mobile  
- 🚀 Membangun server (Node.js)  
- 🎮 Game development  

**Karakteristik Utama:**  
- 🔄 Single-threaded dengan event loop  
- 📜 Interpreted language  
- 🧩 Multi-paradigma (OOP, functional)  
- 🎭 Dinamis dan loosely typed  

**Ekosistem Modern:**  
- 🌟 ES6+ (ECMAScript 2015+)  
- ⚡ Node.js Runtime  
- 🖼️ Framework: React, Vue, Angular  
- 📦 Package Manager: npm, yarn  

---

## 2. Cara Menggunakan JavaScript
### 1. External File (Direkomendasikan)
```html
<script src="script.js" defer></script>
<!-- 
  🟦 defer: Eksekusi setelah HTML selesai parsing
  🟨 async: Eksekusi segera setelah tersedia
-->
```

### 2. Internal Script
```html
<script>
  // 🟨 Contoh penggunaan langsung
  console.log('Halo Dunia!'); 
</script>
```

### 3. Inline (Hindari)
```html
<button onclick="alert('Ini contoh buruk!')">🛑 Jangan klik</button>
```

### 4. Module System (ES6+)
```javascript
// 📁 math.js
export const PHI = 3.14;  // 🟦 Eksport variabel

// 📁 main.js
import { PHI } from './math.js';  // 🟦 Import spesifik
console.log(PHI);  // 3.14
```

---

## 3. Dasar Pemrograman
### Variabel & Scope
```javascript
// 🟦 const (immutable)
const nama = "This Key";  // 🟩 String 
const usia = 19;         // 🟧 Number

// 🟦 let (mutable)
let isActive = true;     // 🟦 Boolean

// ❌ var (hindari - function scoped)
var alamat = "Lampung";  // 🟥 Legacy
```

### Operator Modern
```javascript
// 🟦 Destructuring Object
const { nama, usia } = { nama: "This Key", usia: 19 };

// 🟦 Spread Operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3];  // [1, 2, 3]

// 🟦 Nullish Coalescing
const nilai = null ?? 100;  // 100
```

---

## 4. Tipe Data & Struktur
### Tipe Primitif
| Tipe       | Contoh              | Warna    |
|------------|---------------------|----------|
| `String`   | `"Hello World"`     | 🟩 Hijau |
| `Number`   | `42`, `3.14`        | 🟧 Oranye|
| `Boolean`  | `true`, `false`     | 🟦 Biru  |
| `null`     | `null`              | ⚫ Hitam |
| `undefined`| `undefined`         | ⚪ Putih |

### Struktur Data Kompleks
```javascript
// 🟪 Array
const hobbies = ["Coding", "Gaming", 123, true];

// 🟪 Object
const profile = {
  nama: "This Key",    // 🟩 String
  usia: 19,            // 🟧 Number
  skills: ["JS", "Python"],  // 🟪 Array
  alamat: {            // 🟪 Nested Object
    kota: "Lampung",
    kodePos: 12345
  }
};

// 🟪 Map (Key-value modern)
const userMap = new Map();
userMap.set("nama", "This Key");
```

---

## 5. Manipulasi DOM
### Seleksi Elemen
```javascript
// 🟦 Modern
const btn = document.querySelector('#main-btn');  // 🟪 ID
const cards = document.querySelectorAll('.card'); // 🟪 Class

// 🟥 Legacy
document.getElementById('header');
```

### Manipulasi Konten
```javascript
// 🖌️ Update teks
element.textContent = "Teks Baru";  

// 🎨 Update style
element.style.backgroundColor = "#2d2d2d";

// ➕ Tambah class
element.classList.add('active');

// 🆕 Buat elemen
const newElement = document.createElement('div');
document.body.appendChild(newElement);
```

---

## 6. Event Handling
### Event Listener Modern
```javascript
document.querySelector('#btn').addEventListener('click', (e) => {
  // 🟦 Arrow function
  console.log(e.target);  // 🖱️ Element yang diklik
  e.preventDefault();     // ⛔ Cegah perilaku default
});
```

### Event Delegation
```javascript
document.querySelector('.container').addEventListener('click', (e) => {
  if(e.target.matches('.item')) {
    // 🎯 Handle click pada .item
  }
});
```

---

## 7. Asynchronous Programming
### Promise Chaining
```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if(!response.ok) throw new Error('Network error');  // 🚨 Error handling
    return response.json();
  })
  .then(data => processData(data))
  .catch(error => console.error('🔥 Error:', error));
```

### Async/Await
```javascript
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return { status: 'success', data };
  } catch (error) {
    return { status: 'error', error };
  }
}
```

---

## 8. Modern JavaScript (ES6+)
### Arrow Function
```javascript
const sum = (a, b) => a + b;          // 🟦 Single line
const getUser = id => ({ id, name }); // 🟦 Return object

// 🟦 Parameter default
const greet = (name = "Stranger") => `Hello ${name}!`;
```

### Class & OOP
```javascript
class User {
  constructor(name) {
    this.name = name;  // 🟦 Property
  }

  // 🟦 Method
  greet() {
    return `Halo, ${this.name}!`;
  }
}

const user1 = new User("This Key");
```

---

## 9. Best Practices
### Kode Bersih
```javascript
// ✅ Baik
function calculateTotal(price, quantity) {
  return price * quantity;
}

// ❌ Buruk
function calc(a,b){return a*b}
```

### Error Handling
```javascript
try {
  // 🚧 Kode beresiko
  JSON.parse(invalidJson);
} catch (error) {
  console.error('💥 Error:', error.message);  // 🟥 Log error
  // 🛠️ Fallback mechanism
  return defaultData;
}
```

### Performance Tips
1. 🚫 Hindari global variables
2. 🔄 Gunakan event delegation
3. ⚡ Optimasi loop dengan `break`/`continue`
4. 📦 Gunakan Web Workers untuk tugas berat

---

## 10. Referensi Tambahan
| Sumber | Link | Keterangan |
|--------|------|------------|
| **MDN** | [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Dokumentasi resmi |
| **JavaScript.info** | [javascript.info](https://javascript.info) | Tutorial interaktif |
| **ES6 Features** | [es6-features.org](http://es6-features.org) | Panduan ES6+ |
| **Node.js** | [nodejs.org](https://nodejs.org) | Runtime JavaScript |

```javascript
// 🎁 Contoh Kode Modern
const getData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw new Error(`Gagal fetch data: ${error.message}`);
  }
};

// 🚀 Inisialisasi Aplikasi
(() => {
  console.log('🔥 Aplikasi Dimulai!');
  getData('https://api.example.com/data')
    .then(data => render(data))
    .catch(error => showError(error));
})();
```

---

**Kredit**  
Dokumentasi ini disusun oleh **[This Key](https://github.com/kioshappyio)** from **[DevNova](https://devnova.id)** yang mendukung edukasi teknologi terbuka 🚀  

*"Belajar adalah proses tanpa akhir. Mari terus berkarya!"* 🚀