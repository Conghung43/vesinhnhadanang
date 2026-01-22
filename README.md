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
