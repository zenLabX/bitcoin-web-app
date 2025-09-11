## 基礎環境說明
- Next.js 開發的專案
- 使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 所建立

---

## 資料夾結構說明

### app (整個專案的入口)
- layout.tsx 整個 app 的入口 
  - 頁面元件會更新在此頁上的 children，自動匹配路由
  - html head 的設定區
- page.tsx 為 url 根目錄顯示的畫面
- api 資料夾 (定義 API 請求的一些接口)
- favicon.ico 網頁圖標
- global.css 整個網頁用到的 css (自定義)
