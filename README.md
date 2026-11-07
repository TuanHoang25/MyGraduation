# 🎓 3D Interactive Graduation Roadmap Website

Website 3D kỷ niệm Lễ Tốt Nghiệp tương tác trực quan với hòn đảo lơ lửng (Floating Low-poly Island), máy bay, chim bay và không gian bầu trời trong xanh. Được tối ưu hóa chuyên biệt để bạn bè quét mã QR trên điện thoại di động (hoặc mở trên máy tính) vô cùng mượt mà.

---

## 🌟 Tính Năng Nổi Bật

1. **Không gian 3D Tương Tác Sống Động:**
   - Hòn đảo 3D low-poly với khả năng xoay 360° bằng cách vuốt/kéo chuột hoặc phím mũi tên `←` `→`.
   - Máy bay biplane và đàn chim chuyển động theo thời gian thực.
   - Bầu trời mây trôi nhẹ nhàng và hiệu ứng ánh sáng pastel ấm áp.

2. **3 Giai Đoạn Roadmap Trọng Tâm:**
   - **Giai đoạn 1: Chúc Mừng Lễ Tốt Nghiệp**  
     - Thông điệp tri ân, câu trích dẫn yêu thích.
     - 4 cột mốc đáng nhớ suốt 4 năm đại học (Khởi đầu, Thử thách, Thực tập, Tốt nghiệp).
     - Lời cảm ơn ba mẹ, thầy cô, bạn bè & nút bắn pháo hoa giấy (confetti).
   - **Giai đoạn 2: Gợi Ý Địa Điểm Ăn Chơi Hôm Đó**  
     - Gợi ý 3 tăng: *Tăng 1 (Ăn mừng/Lẩu nướng/Món Việt)*, *Tăng 2 (Cafe sống ảo áo Kỹ sư)*, *Tăng 3 (Karaoke/Boardgame/Pub)*.
     - Tích hợp sẵn khoảng giá, cự ly từ trường, điểm nổi bật và **nút 1-chạm mở Google Maps chỉ đường**.
     - Bí kíp ăn chơi tiện lợi cho ngày lễ.
   - **Giai đoạn 3: Kính Mời Bạn Bè Tham Dự & Kết Thúc**  
     - Thiệp mời trang trọng với thời gian, địa điểm, hội trường đón khách.
     - Timeline chi tiết trong ngày (đón khách, trao bằng, chụp hình, di chuyển).
     - Gợi ý dress code.
     - **Nút "Thêm vào Google Calendar"** tự động tạo lịch hẹn trên điện thoại.
     - **Lưu bút & Gửi lời chúc mừng online** (bạn bè có thể gửi lời chúc, lưu lại và sao chép dễ dàng).

3. **Tối Ưu Hoá Mobile & Quét QR:**
   - Nút mở Popup QR Code ngay trên thanh Header để bạn bè có thể quét trực tiếp từ màn hình điện thoại hoặc in ra thiệp.
   - Hỗ trợ cả 2 hình thức điều hướng: Vuốt xoay 3D hoặc bấm trực tiếp vào các mốc "Chúc mừng - Ăn chơi - Thiệp mời" để đảo tự động xoay mượt mà đến góc nhìn đẹp nhất.
   - Modal/Bottom Sheet trượt lên tiện lợi, không cần chuyển URL, giữ nguyên âm thanh nền thư giãn.
   - Nút bật/tắt nhạc nền nhẹ nhàng (`sakura.mp3`).

---

## 🛠️ Công Nghệ Sử Dụng

- **React 18** & **Vite**: Khởi động siêu tốc, bundle nhẹ.
- **Three.js**, **@react-three/fiber**, **@react-three/drei**: Xử lý WebGL và 3D Model.
- **Draco Compression**: Giải nén 3D model offline từ thư mục `/draco/` giúp tải cực nhanh trên mạng di động.
- **Tailwind CSS**: Thiết kế giao diện hiện đại, kính mờ (Glassmorphism), chuẩn responsive Mobile & Desktop.
- **Canvas Confetti**: Hiệu ứng pháo hoa giấy chúc mừng.
- **QR Code SVG**: Tạo mã QR sắc nét theo thời gian thực.
- **Be Vietnam Pro Font**: Chuẩn tiếng Việt 100%, sắc nét trên mọi hệ điều hành.

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Local

### 1. Khởi động môi trường phát triển:
```bash
npm run dev
```
Sau đó truy cập đường dẫn hiển thị trên terminal (thường là `http://localhost:5173`).

### 2. Build dự án:
```bash
npm run build
```

---

## 📝 Cách Chỉnh Sửa Thông Tin Cá Nhân

Toàn bộ thông tin của bạn được gom gọn gàng trong duy nhất một file:
👉 **`src/constants/graduationData.js`**

Bạn có thể mở file này và thay đổi:
- **Tên, danh hiệu, chuyên ngành, trường đại học**
- **Ảnh đại diện** (đặt link ảnh hoặc file ảnh trong `src/assets/`)
- **Ngày giờ tổ chức lễ, tên hội trường, địa chỉ trường**
- **Danh sách các quán ăn, quán cafe** bạn dự định mời bạn bè ghé qua
- **Lịch trình timeline buổi lễ**

---

## 🌐 Hướng Dẫn Deploy Lên Vercel (Miễn Phí)

Dự án đã được cấu hình sẵn file `vercel.json` phục vụ Single Page App.

### Cách 1: Deploy qua GitHub (Khuyên dùng)
1. Đẩy code lên GitHub repository của bạn:
   ```bash
   git init
   git add .
   git commit -m "feat: 3D graduation roadmap website"
   git branch -M main
   git remote add origin <URL_REPO_GITHUB_CUA_BAN>
   git push -u origin main
   ```
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub.
3. Bấm **"Add New..."** -> **"Project"** -> Chọn repository vừa tạo.
4. Vercel sẽ tự nhận diện framework là **Vite**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Bấm **"Deploy"**. Trong vòng 1 phút, bạn sẽ nhận được đường dẫn dạng:  
   `https://ten-du-an.vercel.app`

### Cách 2: Deploy trực tiếp bằng Vercel CLI
```bash
npx vercel
```
Làm theo các bước hướng dẫn trên dòng lệnh là xong!

---

*Chúc bạn có một buổi Lễ Tốt Nghiệp thật rực rỡ, đáng nhớ bên gia đình và bạn bè! 🎓🎉*

