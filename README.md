## 基礎環境說明
- Next.js 開發的專案
- 使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 所建立
- 使用 headlessui 組件

---

## 資料夾結構說明

### 🗂️ public
- images 放置靜態圖片 (http://localhost:3000/images/bitcoin-banner.jpeg) 可讀到圖檔

### 🗂️ src/app 
整個專案的入口
- layout.tsx 整個 app 的入口 
  - 屬於 server component
  - 頁面元件會更新在此頁上的 children，自動匹配路由
  - html head 的設定區
- page.tsx 為 url 根目錄顯示的畫面
- api 資料夾 (自定義與後端 API 的 post, get..等請求的一些接口)
- favicon.ico 網頁圖標
- global.css 整個網頁用到的 css (自定義)

### 🗂️ src/components
專案中所共用的元件。
- layout.tsx 檔案在後續引入的頁面中，功能是使頁面置中，類似於 bootstrap 的 container。
- post.tsx 貼文元件，後續資料跑迴圈時可用，固定結構 h3 + p 標籤...

### 🗂️ src/config
- API 會用到的常數的設定

### 🗂️ src/modules
客戶端組件模組放置的資料夾。在這邊的檔案只要加上 `"use client";` 就是屬於客戶端組件。Client Component 的邏輯都是透過 React Hooks 去執行的 ; 換言之要用 React Hooks 的元件都必須加上 `"use client";`。如果沒有加上 `"use client";` 則會被判定是需要在 server 上預處理的部分。


### 🗂️ src/type 
偏向全域環境中會共用到的 type

### 🗂️ src/utils
跟後端 API 相關的工具

### 📄 src/middleware.ts
發送請求後與載入畫面之前，先在 middleware 做資料預處理：

- 第一步：用戶輸入 url
- 第二步驟：執行 middleware
- 第三步驟：查看 src/app 的內容後，開始載入畫面

### next.config.ts
next.js 的設定檔，將隨專案需求而有客製化設定，可能是 JS、CSS 的一些變異設定。

### frontend notes
謹慎使用 `'use client';`，因為大量使用就少了 SSR 能發揮的優勢了。開發時可以思考哪些地方是可以用 server component 執行的。

---

## 資料庫服務

### MongoDB Atlas
將 MongoDB 資料庫部署在雲端的服務。

---

## React Query 在 Next.js 的使用方式

✅ 「把 React Query Provider 包裝成 Client Component，再放進 Server Component 當 children」是 Next.js 官方建議的做法。
可以同時具備 Server Component 的 SSR，又能在 Client Component 裡使用 hook 和 React Query。

---
### 常用的 React Query Hook
| Hook               | 用途                            | 補充說明                                                                                   |
| ------------------ | ----------------------------- | -------------------------------------------------------------------------------------- |
| **useQuery**       | 拿資料 (GET API)                 | 主要用於「讀取資料」，自動管理 loading、error、cache。通常傳入一個 key 與 fetch function。                       |
| **useMutation**    | 送資料 (POST / PUT / DELETE API) | 用於「修改資料」，不會自動更新 cache，需要搭配 `onSuccess` 或 `queryClient.invalidateQueries` 刷新資料。         |
| **useQueryClient** | 操作或刷新快取                       | 取得全域 `QueryClient`，可以用 `invalidateQueries`、`setQueryData`、`refetchQueries` 等來手動控制資料更新。 |

#### 額外小技巧

1. GET API → 優先用 useQuery，避免自己管理 loading / error 狀態。

2. POST / PUT / DELETE → 用 useMutation，操作成功後通常呼叫 queryClient.invalidateQueries 來刷新 GET 資料。

3. 快取刷新 → useQueryClient + invalidateQueries 或 setQueryData 可以做到局部更新，提升效率。