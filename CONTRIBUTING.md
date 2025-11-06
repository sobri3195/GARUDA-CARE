# Contributing to SIMRS TNI AU

Terima kasih atas minat Anda untuk berkontribusi pada SIMRS TNI AU! Dokumen ini memberikan panduan untuk kontribusi.

## Kode Etik

Proyek ini dan setiap orang yang berpartisipasi harus:
- Bersikap profesional dan menghormati
- Menjaga kerahasiaan data sensitif
- Mengikuti standar keamanan informasi TNI
- Mematuhi peraturan dan undang-undang yang berlaku

## Cara Berkontribusi

### Melaporkan Bug

Jika Anda menemukan bug:

1. Pastikan bug belum dilaporkan di Issues
2. Buat Issue baru dengan template:
   ```
   **Deskripsi Bug:**
   [Jelaskan bug secara detail]
   
   **Langkah Reproduksi:**
   1. Buka modul...
   2. Klik tombol...
   3. Error muncul...
   
   **Expected Behavior:**
   [Apa yang seharusnya terjadi]
   
   **Screenshots:**
   [Jika ada]
   
   **Environment:**
   - Browser: Chrome 120
   - OS: Windows 11
   - Version: 1.0.0
   ```

### Mengusulkan Fitur Baru

1. Buat Issue dengan label "enhancement"
2. Jelaskan fitur yang diusulkan
3. Berikan use case dan mockup jika ada
4. Tunggu approval dari tim sebelum mulai development

### Pull Request

#### Setup Development Environment

```bash
# Clone repository
git clone <repository-url>
cd simrs-tni-au

# Install dependencies
npm install

# Jalankan development server
npm start
```

#### Workflow

1. **Fork repository** dan buat branch baru:
   ```bash
   git checkout -b feature/nama-fitur
   # atau
   git checkout -b fix/nama-bug
   ```

2. **Buat perubahan** dengan mengikuti coding standards

3. **Test perubahan**:
   ```bash
   npm run build
   npm start
   ```

4. **Commit dengan message yang jelas**:
   ```bash
   git commit -m "feat: tambah fitur X di modul Y"
   # atau
   git commit -m "fix: perbaiki bug Z di halaman W"
   ```

5. **Push ke branch**:
   ```bash
   git push origin feature/nama-fitur
   ```

6. **Buat Pull Request** dengan deskripsi lengkap

#### Commit Message Convention

Gunakan conventional commits:

```
feat: fitur baru
fix: perbaikan bug
docs: perubahan dokumentasi
style: formatting, missing semicolons, dll (no code change)
refactor: refactoring code
test: menambah/update tests
chore: update dependencies, dll
```

Contoh:
```
feat(registrasi): tambah validasi NIK dengan Dukcapil
fix(farmasi): perbaiki perhitungan stok minimum
docs(readme): update installation guide
```

## Coding Standards

### JavaScript/React

1. **Gunakan functional components dan hooks**
   ```javascript
   // Good
   const MyComponent = () => {
     const [state, setState] = useState(false);
     return <div>...</div>;
   };
   
   // Avoid
   class MyComponent extends React.Component { ... }
   ```

2. **Destructure props**
   ```javascript
   // Good
   const Header = ({ title, user }) => { ... };
   
   // Avoid
   const Header = (props) => { ... props.title ... };
   ```

3. **Use meaningful variable names**
   ```javascript
   // Good
   const patientName = "John Doe";
   const isPatientRegistered = true;
   
   // Avoid
   const pn = "John Doe";
   const flag = true;
   ```

4. **Keep components small and focused**
   - Maksimal 300 baris per file
   - Satu tanggung jawab per component
   - Extract reusable logic ke custom hooks

5. **Handle errors gracefully**
   ```javascript
   try {
     await fetchPatientData();
   } catch (error) {
     console.error("Error fetching patient:", error);
     showErrorNotification("Gagal mengambil data pasien");
   }
   ```

### CSS

1. **Gunakan class names yang deskriptif**
   ```css
   /* Good */
   .patient-card { ... }
   .btn-primary { ... }
   
   /* Avoid */
   .pc { ... }
   .b1 { ... }
   ```

2. **Follow BEM methodology (opsional)**
   ```css
   .card { ... }
   .card__header { ... }
   .card__body { ... }
   .card--highlighted { ... }
   ```

3. **Use CSS variables**
   ```css
   .button {
     background-color: var(--primary);
     color: var(--text);
   }
   ```

### File Structure

```
src/
├── components/
│   ├── common/         # Reusable components
│   ├── layout/         # Layout components
│   └── specific/       # Module-specific components
├── pages/              # Page components
├── hooks/              # Custom hooks
├── contexts/           # React contexts
├── utils/              # Utility functions
├── services/           # API services
└── constants/          # Constants and configs
```

## Testing

### Manual Testing Checklist

Before submitting PR:
- [ ] Fitur berfungsi di Chrome
- [ ] Fitur berfungsi di Firefox
- [ ] Fitur berfungsi di Safari (jika ada)
- [ ] Responsive di mobile (375px)
- [ ] Responsive di tablet (768px)
- [ ] Tidak ada console errors
- [ ] Build berhasil tanpa warning

### Automated Testing (Future)

```bash
npm test
```

## Security Guidelines

1. **Jangan commit credentials**
   - API keys
   - Passwords
   - Access tokens
   
2. **Validate user input**
   ```javascript
   // Always validate and sanitize
   const sanitizedInput = DOMPurify.sanitize(userInput);
   ```

3. **Use HTTPS for API calls**

4. **Implement proper authentication**

5. **Follow OWASP guidelines**

## Documentation

### Code Comments

```javascript
// Good: Explain WHY, not WHAT
// Calculate age because BPJS API requires it in years
const age = calculateAge(birthDate);

// Avoid: State the obvious
// Set the name variable
const name = "John";
```

### JSDoc for Functions

```javascript
/**
 * Menghitung umur pasien berdasarkan tanggal lahir
 * @param {Date} birthDate - Tanggal lahir pasien
 * @returns {number} Umur dalam tahun
 */
function calculateAge(birthDate) {
  // implementation
}
```

## Review Process

1. **Self-review** kode Anda sebelum submit PR
2. Tunggu **code review** dari maintainer
3. Address **review comments**
4. Setelah approved, PR akan di-merge

## Questions?

Jika ada pertanyaan:
- Buka Issue dengan label "question"
- Email: dev@simrs-tniau.mil.id
- Discord: [Link jika ada]

## License

Dengan berkontribusi, Anda setuju bahwa kontribusi Anda akan dilisensikan di bawah lisensi yang sama dengan proyek ini.

---

**Terima kasih telah berkontribusi pada SIMRS TNI AU! 🙏**
