# Clean Pro - Dịch Vụ Vệ Sinh Chuyên Nghiệp

Ứng dụng web đặt lịch dịch vụ vệ sinh nhà ở, văn phòng và nhà trọ.

## 🚀 Công nghệ sử dụng

- **Frontend**: React + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL (production) / In-memory (development)
- **UI Components**: Radix UI + Tailwind CSS + shadcn/ui
- **Form Management**: React Hook Form + Zod
- **State Management**: TanStack Query (React Query)

## 📋 Yêu cầu hệ thống

- Node.js >= 18.x
- npm >= 9.x

## 🛠️ Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd web-ve-sinh
```

2. Cài đặt dependencies:
```bash
npm install
```

## 🧪 Chạy thử nghiệm (Development)

### Khởi động server development

```bash
npm run dev
```

Server sẽ chạy tại `http://localhost:5000` (mặc định).

**Lưu ý**: Nếu port 5000 đã bị sử dụng, chạy với port khác:

```bash
PORT=3002 npm run dev
```

### Tính năng development mode

- ✅ Hot Module Replacement (HMR)
- ✅ In-memory database (không cần PostgreSQL)
- ✅ Auto-reload khi thay đổi code
- ✅ Vite dev server tích hợp

### Kiểm tra ứng dụng

Mở trình duyệt và truy cập:
- Frontend: `http://localhost:3002`
- API endpoints:
  - `POST /api/bookings` - Tạo đặt lịch mới
  - `GET /api/bookings` - Lấy danh sách đặt lịch

### Test API với curl

```bash
# Tạo booking mới
curl -X POST http://localhost:3002/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nguyễn Văn A",
    "phone": "0912345678",
    "address": "123 Đường ABC, Hà Nội",
    "serviceType": "Vệ sinh nhà ở",
    "preferredTime": "Sáng thứ 7 tuần này",
    "notes": "Cần dọn dẹp tổng thể"
  }'

# Lấy danh sách bookings
curl http://localhost:3002/api/bookings
```

## 🏗️ Build cho Production

### Build ứng dụng

```bash
npm run build
```

Lệnh này sẽ:
1. Compile TypeScript code
2. Bundle frontend assets
3. Tạo thư mục `dist/` với các file production

### Chạy production build

```bash
npm start
```

**Lưu ý**: Production mode yêu cầu PostgreSQL database.

## 🗄️ Cấu hình Database

### Development Mode

Không cần cấu hình - sử dụng in-memory storage.

### Production Mode

1. Tạo PostgreSQL database

2. Thiết lập biến môi trường `DATABASE_URL`:

```bash
export DATABASE_URL="postgresql://user:password@localhost:5432/cleanpro"
```

3. Push database schema:

```bash
npm run db:push
```

4. Khởi động server:

```bash
npm start
```

## 🌍 Biến môi trường

| Biến | Mô tả | Mặc định | Bắt buộc |
|------|-------|----------|----------|
| `PORT` | Port server chạy | 5000 | Không |
| `NODE_ENV` | Environment mode | development | Không |
| `DATABASE_URL` | PostgreSQL connection string | - | Production |

### File .env (tùy chọn)

Tạo file `.env` trong thư mục gốc:

```env
PORT=3002
NODE_ENV=development
# DATABASE_URL=postgresql://user:password@localhost:5432/cleanpro
```

## 📁 Cấu trúc thư mục

```
web-ve-sinh/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
│   └── index.html
├── server/                # Backend Express server
│   ├── index.ts          # Entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage layer
│   └── db.ts             # Database connection
├── shared/               # Shared code (types, schemas)
│   ├── schema.ts         # Database schema
│   └── routes.ts         # API route definitions
└── dist/                 # Build output (generated)
```

## 🚢 Deploy

### Deploy lên VPS/Server

1. Cài đặt Node.js và PostgreSQL trên server

2. Clone code và cài đặt dependencies:
```bash
git clone <repository-url>
cd web-ve-sinh
npm install
```

3. Thiết lập biến môi trường:
```bash
export NODE_ENV=production
export DATABASE_URL="postgresql://user:password@localhost:5432/cleanpro"
export PORT=5000
```

4. Khởi tạo database:
```bash
npm run db:push
```

5. Build và chạy:
```bash
npm run build
npm start
```

### Deploy với PM2

```bash
# Cài đặt PM2
npm install -g pm2

# Khởi động ứng dụng
pm2 start npm --name "cleanpro" -- start

# Xem logs
pm2 logs cleanpro

# Auto-start on reboot
pm2 startup
pm2 save
```

### Deploy lên Heroku

1. Tạo Heroku app:
```bash
heroku create cleanpro-app
```

2. Add PostgreSQL addon:
```bash
heroku addons:create heroku-postgresql:mini
```

3. Deploy:
```bash
git push heroku main
```

4. Khởi tạo database:
```bash
heroku run npm run db:push
```

### Deploy lên Railway/Render

1. Connect repository từ GitHub
2. Thiết lập biến môi trường `DATABASE_URL`
3. Build command: `npm run build`
4. Start command: `npm start`

### Deploy lên GitHub Pages (Static Frontend Only)

**⚠️ Lưu ý quan trọng**: 
- GitHub Pages chỉ host **frontend tĩnh** (HTML/CSS/JS)
- **Backend API không chạy được** trên GitHub Pages
- Phù hợp cho: demo giao diện, landing page, hoặc frontend kết nối API bên ngoài

#### 📦 Files được deploy

GitHub Pages sẽ sử dụng các files trong thư mục `dist/public/` sau khi build:
- `index.html` - Trang HTML chính
- `assets/*.js` - JavaScript đã được bundle
- `assets/*.css` - CSS đã được bundle  
- Images và static files khác

#### Bước 1: Thêm script build frontend

Thêm vào `package.json`:
```json
{
  "scripts": {
    "build:static": "vite build"
  }
}
```

Script này chỉ build frontend (không build backend), tạo ra thư mục `dist/public/`.

#### Bước 2: Cấu hình base path (tùy chọn)

**Chỉ cần nếu repository KHÔNG phải `<username>.github.io`**

Chỉnh sửa `vite.config.ts`, thêm dòng `base`:
```typescript
export default defineConfig({
  base: '/web-ve-sinh/', // ⚠️ Thay bằng tên repository của bạn
  plugins: [
    react(),
    // ... các plugin khác
  ],
  // ... các config khác giữ nguyên
});
```

Ví dụ: Nếu repo là `github.com/username/my-app` thì `base: '/my-app/'`

#### Bước 3: Build frontend

```bash
npm run build:static
```

Kết quả: Thư mục `dist/public/` chứa toàn bộ frontend đã build.

#### Bước 4: Deploy tự động với GitHub Actions

Tạo file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]  # Hoặc 'master' tùy branch chính của bạn
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build frontend
        run: npm run build:static
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Bước 5: Cấu hình GitHub Repository

1. Vào repository trên GitHub
2. **Settings** → **Pages**
3. **Source**: chọn **GitHub Actions**
4. Push code lên GitHub (workflow tự động chạy)

Website sẽ có tại: `https://<username>.github.io/<repository-name>/`

#### Deploy thủ công (Alternative Method)

Nếu không dùng GitHub Actions:

```bash
# Cài đặt gh-pages package
npm install -D gh-pages

# Thêm script vào package.json
{
  "scripts": {
    "deploy:pages": "npm run build:static && gh-pages -d dist/public"
  }
}

# Deploy
npm run deploy:pages
```

#### ⚙️ Xử lý Backend API

Vì GitHub Pages không chạy backend, bạn có 3 lựa chọn:

**Option 1: Deploy backend riêng** ⭐ Khuyến nghị
1. Deploy backend lên Railway/Render/Heroku
2. Cập nhật API URL trong frontend:

```typescript
// Ví dụ: client/src/lib/api.ts
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://your-backend-api.railway.app' // Backend production URL
  : 'http://localhost:5000'; // Local development

// Sử dụng trong fetch/axios
fetch(`${API_BASE_URL}/api/bookings`)
```

**Option 2: Sử dụng mock data**
- Chỉ để demo giao diện
- Không có chức năng backend thực tế
- Phù hợp cho portfolio/showcase

**Option 3: Serverless Functions**
- Deploy lên Vercel/Netlify (có hỗ trợ serverless)
- Viết lại API endpoints thành serverless functions

#### 📊 So sánh các platform deployment

| Platform | Frontend | Backend | Database | Chi phí | Phù hợp cho |
|----------|----------|---------|----------|---------|-------------|
| **GitHub Pages** | ✅ | ❌ | ❌ | Miễn phí | Demo UI, Landing page |
| **Vercel** | ✅ | ✅ Serverless | ❌ | Free tier | JAMstack, Next.js |
| **Netlify** | ✅ | ✅ Serverless | ❌ | Free tier | JAMstack, Static sites |
| **Railway** | ✅ | ✅ Full | ✅ | Free tier | Full-stack apps |
| **Render** | ✅ | ✅ Full | ✅ | Free tier | Full-stack apps |
| **Heroku** | ✅ | ✅ Full | ✅ | Trả phí | Production apps |

**💡 Khuyến nghị cho project này:**
- **Demo/Portfolio**: GitHub Pages (frontend) + Railway (backend + DB)
- **Production**: Railway/Render/Heroku (full-stack)
- **Chi phí 0đ**: GitHub Pages (frontend) + Railway Free tier (backend)

## 🔧 Scripts có sẵn

| Script | Mô tả |
|--------|-------|
| `npm run dev` | Chạy development server |
| `npm run build` | Build production |
| `npm start` | Chạy production server |
| `npm run check` | Type checking với TypeScript |
| `npm run db:push` | Push database schema |

## 🐛 Troubleshooting

### Port đã được sử dụng

```bash
# Tìm process đang dùng port
lsof -ti:5000

# Kill process
lsof -ti:5000 | xargs kill -9

# Hoặc dùng port khác
PORT=3002 npm run dev
```

### Database connection error

- Kiểm tra PostgreSQL đang chạy
- Xác nhận `DATABASE_URL` đúng format
- Development mode: không cần database

### Build errors

```bash
# Clear cache và reinstall
rm -rf node_modules dist
npm install
npm run build
```

## 📝 License

MIT

## 👥 Contact

- Email: lienhe@cleanpro.vn
- Phone: 0912.553.748
