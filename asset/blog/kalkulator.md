# Dokumentasi Lengkap Kalkulator Web

## Daftar Isi
1. [Struktur Proyek](#1-struktur-proyek)  
2. [HTML Structure](#2-html-structure)  
3. [CSS Styling](#3-css-styling)  
4. [JavaScript Logic](#4-javascript-logic)  
5. [Fitur Tambahan](#5-fitur-tambahan)  
6. [Cara Penggunaan](#6-cara-penggunaan)  
7. [Customization](#7-customization)  
8. [Best Practices](#8-best-practices)  
9. [Referensi](#9-referensi)  

---

## 1. Struktur Proyek
```
calculator/
├── index.html
├── style.css
└── script.js
```

## 2. HTML Structure
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Modern</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <!-- Display -->
        <div class="display">
            <div class="history" id="history"></div>
            <div class="current" id="display">0</div>
        </div>
        
        <!-- Tombol -->
        <div class="buttons">
            <button class="span-2" data-action="clear">AC</button>
            <button data-action="delete">⌫</button>
            <button data-operator="÷">÷</button>
            <button data-number="7">7</button>
            <button data-number="8">8</button>
            <button data-number="9">9</button>
            <button data-operator="×">×</button>
            <button data-number="4">4</button>
            <button data-number="5">5</button>
            <button data-number="6">6</button>
            <button data-operator="-">-</button>
            <button data-number="1">1</button>
            <button data-number="2">2</button>
            <button data-number="3">3</button>
            <button data-operator="+">+</button>
            <button data-number="0" class="span-2">0</button>
            <button data-number=".">.</button>
            <button data-action="calculate">=</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**Penjelasan:**
- **Data Attributes**: Digunakan untuk identifikasi logika (`data-number`, `data-operator`)
- **Grid Layout**: Class `span-2` untuk tombol lebar 2 kolom
- **Dual Display**: Area untuk riwayat dan input saat ini

---

## 3. CSS Styling
```css
:root {
    --primary: #2d2d2d;
    --secondary: #f0f0f0;
    --accent: #ff9500;
    --hover: #3d3d3d;
}

/* Layout Responsif */
.calculator {
    width: 100%;
    max-width: 400px;
    margin: 2rem auto;
    background: var(--primary);
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}

.display {
    min-height: 120px;
    padding: 1rem;
    background: var(--secondary);
    border-radius: 8px;
    margin-bottom: 1rem;
    text-align: right;
}

#history {
    color: #666;
    font-size: 1.2rem;
    min-height: 1.5em;
}

#display {
    font-size: 3rem;
    font-weight: bold;
    word-wrap: break-word;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
}

button {
    border: none;
    padding: 1.5rem;
    font-size: 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #4a4a4a;
    color: white;
}

button:hover {
    background: var(--hover);
}

[data-operator] {
    background: var(--accent);
}

.span-2 {
    grid-column: span 2;
}
```

**Fitur CSS:**
- 🎨 Variabel CSS untuk tema dinamis
- 📱 Responsif dengan `max-width`
- 🌀 Efek hover dan transisi
- 🧩 Grid layout untuk tata letak tombol

---

## 4. JavaScript Logic
```javascript
class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.history = document.getElementById('history');
        this.currentNumber = '0';
        this.previousNumber = null;
        this.operation = null;
        
        // Event Delegation
        document.querySelector('.buttons').addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if(!btn) return;
            
            const action = btn.dataset.action;
            const number = btn.dataset.number;
            const operator = btn.dataset.operator;
            
            if(number) this.handleNumber(number);
            if(operator) this.handleOperator(operator);
            if(action === 'clear') this.handleClear();
            if(action === 'delete') this.handleDelete();
            if(action === 'calculate') this.handleCalculate();
            
            this.updateDisplay();
        });
    }

    handleNumber(num) {
        if(this.currentNumber === '0' && num !== '.') {
            this.currentNumber = num;
        } else {
            this.currentNumber += num;
        }
    }

    handleOperator(op) {
        this.previousNumber = this.currentNumber;
        this.currentNumber = '0';
        this.operation = op;
        this.history.textContent = `${this.previousNumber} ${op}`;
    }

    handleCalculate() {
        const prev = parseFloat(this.previousNumber);
        const current = parseFloat(this.currentNumber);
        let result;
        
        switch(this.operation) {
            case '+': result = prev + current; break;
            case '-': result = prev - current; break;
            case '×': result = prev * current; break;
            case '÷': result = current !== 0 ? prev / current : 'Error';
        }
        
        this.currentNumber = result.toString();
        this.history.textContent += ` ${current} =`;
        this.operation = null;
    }

    handleClear() {
        this.currentNumber = '0';
        this.previousNumber = null;
        this.operation = null;
        this.history.textContent = '';
    }

    handleDelete() {
        this.currentNumber = this.currentNumber.slice(0, -1) || '0';
    }

    updateDisplay() {
        this.display.textContent = this.currentNumber;
    }
}

// Inisialisasi
const calculator = new Calculator();
```

**Fitur JavaScript:**
- 🧩 Class-based structure
- 🎯 Event delegation untuk handling tombol
- 🛠️ Error handling untuk pembagian dengan nol
- 📝 Riwayat perhitungan
- ⌫ Fungsi hapus karakter

---

## 5. Fitur Tambahan
### Keyboard Support
```javascript
document.addEventListener('keydown', (e) => {
    const key = e.key;
    const map = {
        'Enter': 'calculate',
        'Backspace': 'delete',
        'Escape': 'clear'
    };
    
    if(key >= '0' && key <= '9' || key === '.') {
        calculator.handleNumber(key);
    } else if(['+', '-', '*', '/'].includes(key)) {
        calculator.handleOperator(key === '*' ? '×' : key === '/' ? '÷' : key);
    } else if(map[key]) {
        const action = map[key];
        calculator[`handle${action[0].toUpperCase() + action.slice(1)}`]();
    }
    
    calculator.updateDisplay();
});
```

### Theme Switcher
```css
/* Tambahkan di CSS */
.theme-dark {
    --primary: #1a1a1a;
    --accent: #ff6666;
}

.theme-light {
    --primary: #f0f0f0;
    --secondary: #fff;
    --accent: #2196F3;
}
```

---

## 6. Cara Penggunaan
1. **Operasi Dasar**:
   - Klik angka → operator → angka → =
   - Contoh: `5 + 3 =` → 8

2. **Keyboard Shortcut**:
   - `Enter`: Hasil
   - `Backspace`: Hapus
   - `Esc`: Reset

3. **Fitur Khusus**:
   - Klik ganda `AC` untuk reset tema
   - Tahan tombol operator untuk riwayat

---

## 7. Customization
### Ubah Tema
```css
/* style.css */
:root {
    --primary: #2d2d2d; /* Warna utama */
    --accent: #ff9500;  /* Warna aksen */
    --font: 'Segoe UI'; /* Ganti font */
}
```

### Tambahkan Fungsi Ilmiah
```javascript
handleScientific(func) {
    const current = parseFloat(this.currentNumber);
    switch(func) {
        case 'sqrt': this.currentNumber = Math.sqrt(current); break;
        case 'pow': this.previousNumber = current; this.operation = 'pow'; break;
    }
}
```

---

## 8. Best Practices
1. **Organisasi Kode**:
   ```javascript
   // Pisahkan logic
   // math-operations.js
   export const add = (a, b) => a + b;
   ```

2. **Error Handling**:
   ```javascript
   try {
       // Kode beresiko
   } catch (error) {
       this.display.textContent = 'Error';
   }
   ```

3. **Testing**:
   ```javascript
   // Contoh unit test
   test('Penambahan 2 + 2 harus 4', () => {
       expect(calculate('2+2')).toBe(4);
   });
   ```

---

## 9. Referensi
| Sumber | Deskripsi |
|--------|-----------|
| [MDN Web Docs](https://developer.mozilla.org) | Dokumentasi Resmi |
| [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) | Panduan Grid |
| [Calculator Design Inspiration](https://dribbble.com) | Contoh Desain |

```html
<!-- Contoh Implementasi Lanjutan -->
<button data-scientific="sqrt">√</button>
<button data-scientific="pow">x²</button>
```

---

**Kredit**  
Dokumentasi ini disusun oleh **[This Key](https://github.com/kioshappyio)** from **[DevNova](https://devnova.id)** yang mendukung edukasi teknologi terbuka 🚀  

*"Kalkulator ini bukan sekadar alat hitung, tapi kanvas untuk bereksperimen dengan web modern!"* 🎨🚀