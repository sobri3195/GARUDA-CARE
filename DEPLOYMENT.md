# Panduan Deployment SIMRS TNI AU ke Netlify

## Persiapan Awal

Pastikan Anda sudah memiliki:
- Akun Netlify (gratis di [netlify.com](https://www.netlify.com))
- Repository Git (GitHub, GitLab, atau Bitbucket)
- Node.js dan npm terinstall di komputer lokal

## Metode Deployment

### Metode 1: Deploy Via Git (Recommended)

#### 1. Push ke Git Repository
```bash
git init
git add .
git commit -m "Initial commit: SIMRS TNI AU"
git remote add origin <your-git-repository-url>
git push -u origin main
```

#### 2. Connect ke Netlify
1. Login ke [Netlify Dashboard](https://app.netlify.com)
2. Klik "Add new site" → "Import an existing project"
3. Pilih provider Git Anda (GitHub/GitLab/Bitbucket)
4. Pilih repository SIMRS TNI AU
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Branch to deploy**: `main`
6. Klik "Deploy site"

#### 3. Custom Domain (Opsional)
1. Di Netlify dashboard, klik "Domain settings"
2. Klik "Add custom domain"
3. Masukkan domain Anda (contoh: simrs-tniau.mil.id)
4. Update DNS settings sesuai instruksi Netlify

### Metode 2: Deploy Via Netlify CLI

#### 1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### 2. Login ke Netlify
```bash
netlify login
```

#### 3. Build Project
```bash
npm run build
```

#### 4. Deploy
```bash
# Deploy preview
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Metode 3: Drag & Drop (Quickest)

1. Build project:
```bash
npm run build
```

2. Buka [Netlify Drop](https://app.netlify.com/drop)

3. Drag folder `build/` ke area drop

4. Tunggu hingga deployment selesai

5. Akses URL yang diberikan

## Environment Variables

Jika aplikasi memerlukan environment variables:

### Via Netlify Dashboard
1. Site settings → Build & deploy → Environment
2. Klik "Edit variables"
3. Tambahkan key-value pairs:
   ```
   REACT_APP_API_URL=https://api.simrs-tniau.mil.id
   REACT_APP_BPJS_API_URL=https://vclaim-api.bpjs-kesehatan.go.id
   ```

### Via netlify.toml
```toml
[context.production.environment]
  REACT_APP_API_URL = "https://api.simrs-tniau.mil.id"
  REACT_APP_BPJS_API_URL = "https://vclaim-api.bpjs-kesehatan.go.id"
```

## Continuous Deployment

Dengan Git integration, setiap push ke branch main akan otomatis trigger deployment baru.

### Branch Deploys
```toml
# netlify.toml
[context.staging]
  command = "npm run build"
  base = "/"
  
[context.staging.environment]
  REACT_APP_API_URL = "https://staging-api.simrs-tniau.mil.id"
```

## Netlify Functions (untuk Backend)

Jika perlu serverless functions:

### 1. Buat folder netlify/functions
```bash
mkdir -p netlify/functions
```

### 2. Contoh function
```javascript
// netlify/functions/api.js
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from SIMRS TNI AU API" })
  };
};
```

### 3. Update netlify.toml
```toml
[build]
  functions = "netlify/functions"
```

## Monitoring & Analytics

### 1. Enable Netlify Analytics
- Site settings → Analytics → Enable

### 2. Custom Headers untuk Security
```toml
# netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

## Performance Optimization

### 1. Enable Asset Optimization
- Site settings → Build & deploy → Post processing
- Enable: Bundle CSS, Minify CSS, Minify JS, Compress images

### 2. Enable CDN & HTTPS
- Otomatis enabled by Netlify
- SSL certificate gratis dari Let's Encrypt

### 3. Prerendering (untuk SEO)
```toml
# netlify.toml
[[plugins]]
  package = "@netlify/plugin-lighthouse"
```

## Troubleshooting

### Build Gagal
1. Check build logs di Netlify dashboard
2. Pastikan `package.json` sudah benar
3. Test build lokal: `npm run build`

### 404 Error pada Routes
- Sudah handled via `netlify.toml` redirects
- Pastikan file `netlify.toml` ada di root project

### Slow Loading
1. Enable asset optimization
2. Check bundle size: `npm run build` dan review sizes
3. Consider code splitting

## Rollback

Jika deployment bermasalah:
1. Site settings → Deploys
2. Pilih deploy sebelumnya
3. Klik "Publish deploy"

## Best Practices

1. **Always test locally first**
   ```bash
   npm run build
   npx serve -s build
   ```

2. **Use environment-specific builds**
   - Development
   - Staging
   - Production

3. **Monitor performance**
   - Netlify Analytics
   - Google Lighthouse
   - Core Web Vitals

4. **Security**
   - Enable HTTPS
   - Set security headers
   - Regular dependency updates

5. **Backup**
   - Keep Git repository updated
   - Export Netlify configurations

## Support

Untuk bantuan deployment:
- Netlify Docs: https://docs.netlify.com
- Netlify Community: https://answers.netlify.com
- SIMRS Support: support@simrs-tniau.mil.id

## Checklist Deployment

- [ ] Repository Git sudah siap
- [ ] Build lokal berhasil (`npm run build`)
- [ ] File `netlify.toml` sudah ada
- [ ] Environment variables sudah diset
- [ ] Custom domain sudah dikonfigurasi (opsional)
- [ ] Security headers sudah diaktifkan
- [ ] Asset optimization sudah diaktifkan
- [ ] Monitoring sudah disetup
- [ ] Dokumentasi sudah lengkap
- [ ] Team sudah ditraining

---

**Happy Deploying! 🚀**
