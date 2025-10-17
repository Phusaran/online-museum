# 🏛️ Online Museum (React + Vite Project)

นี่คือโปรเจกต์ "Online Museum" ที่สร้างขึ้นด้วย React, TypeScript และ Vite โดยเป็นส่วนหนึ่งของ Assignment

โปรเจกต์นี้ดึงข้อมูลรูปภาพจาก [Picsum Photos API](https://picsum.photos/) มาแสดงผลในรูปแบบแกลเลอรี พร้อมระบบ "Collection" (กดไลค์) ที่จัดการ State ด้วย Redux Toolkit

## ✨ Features (คุณสมบัติหลัก)

* **Paginated Gallery:** หน้าหลักแสดงรูปภาพ 20 รูปต่อหน้า พร้อมปุ่ม "Next" และ "Prev"
* **Dynamic Routing:** คลิกที่รูปภาพเพื่อไปยังหน้า Detail (`/image/:id`)
* **Detail Page:** แสดงข้อมูลรูปภาพเชิงลึก ได้แก่ รูปภาพ, ชื่อผู้ถ่าย (Photo by...), ขนาด (Width x Height), และลิงก์ไปยังต้นฉบับ
* **Collection System:**
    * ผู้ใช้สามารถกด "Like" ที่รูปภาพได้จากทั้งหน้าหลักและหน้า Detail
    * มีหน้า "My Collection" (`/collection`) ที่แสดงเฉพาะรูปภาพที่กดไลค์ไว้
    * สามารถกด "Unlike" จากหน้า Collection ได้
* **State Management:** ใช้ **Redux Toolkit** ในการจัดการ State ทั้งหมด (รายการรูปภาพ, หน้าปัจจุบัน, สถานะการโหลด, และ Collection)
* **Responsive Design:** ออกแบบด้วย TailwindCSS และ DaisyUI ให้รองรับการแสดงผลทั้งบน Desktop และ Mobile

## 🚀 Tech Stack (เทคโนโลยีที่ใช้)

* **Framework/Library:** React 19, React Router DOM
* **Bundler:** Vite
* **Language:** TypeScript
* **State Management:** Redux Toolkit, React-Redux
* **Styling:** TailwindCSS, DaisyUI
* **Data Fetching:** Axios

## 📦 How to Run (การติดตั้งและรันโปรเจกต์)

คุณจะต้องมี [Node.js](https://nodejs.org/) (เวอร์ชัน 18+) และ [Git](https://git-scm.com/) ติดตั้งบนเครื่องของคุณ

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Phusaran/online-museum.git](https://github.com/Phusaran/online-museum.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd online-museum
    ```

3.  **Install dependencies:**
    (ติดตั้ง `node_modules` ทั้งหมดที่จำเป็น)
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  เปิดเบราว์เซอร์แล้วไปที่ `http://localhost:5173` (หรือ Port ที่ Terminal แสดง)