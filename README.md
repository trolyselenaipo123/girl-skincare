# Mirror Morning Illustration

Dự án web tĩnh dùng HTML, CSS và JavaScript thuần để trưng bày ảnh minh họa theo bố cục responsive. Không cần cài thư viện hay chạy build.

## Cấu trúc

```text
anime-mirror-github/
├── index.html
├── style.css
├── script.js
├── README.md
├── .nojekyll
└── assets/
    └── illustration.png
```

## Chạy trên máy

Mở trực tiếp `index.html` bằng trình duyệt, hoặc dùng một web server cục bộ:

```bash
python3 -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub.
2. Tải toàn bộ file và thư mục của dự án này lên nhánh `main`.
3. Vào **Settings → Pages**.
4. Trong **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn nhánh `main`, thư mục `/ (root)`, rồi bấm **Save**.
6. Chờ GitHub triển khai và mở địa chỉ Pages được cung cấp.

## Ghi chú

Để hiển thị đúng từng pixel như ảnh gốc, dự án sử dụng chính file ảnh trong thư mục `assets`. HTML/CSS/JS đảm nhiệm bố cục, hiệu ứng, phóng to và tải ảnh. Việc vẽ lại hoàn toàn bức tranh bằng CSS hoặc Canvas sẽ không thể giữ nguyên chi tiết nếu không chuyển ảnh thành hàng nghìn đường vector.
