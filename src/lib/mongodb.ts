import { MongoClient } from "mongodb"; //MongoDB 官方 Node.js driver 提供的 MongoClient，用來建立與資料庫的連線

/** 整段程式碼概要：
 * 1. 建立並管理 MongoDB 資料庫連線
 * 2. 用 全域變數 + 單例模式 的方式，確保應用程式在多次執行時也只會用同一個連線。
 */

const uri = process.env.MONGODB_URI!; //TS 的 非空斷言，告訴編譯器「這個值一定存在，不會是 null/undefined」。
const options = { maxPoolSize: 10 }; //限制最大連線池數量為 10，避免建立過多連線。

let client: MongoClient; //存放 MongoClient 實體
let clientPromise: Promise<MongoClient>; //MongoClient 連線的 Promise（連線是非同步的）

/**
 * [ 建立 global 環境的實體 ]
 * Next.js 或伺服器端環境（例如開發模式會 hot-reload），程式可能會被多次執行，
 * 所以把 _mongoClientPromise 放到 global，避免每次重新跑程式碼都建立新的連線。
 */
declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}

/** 單例模式 (設計模式)
 * 這裡檢查 _mongoClientPromise 是否已經存在：
 * 沒有的話：建立新的 MongoClient，並呼叫 .connect()，把結果存進 global._mongoClientPromise。
 * 已經有的話：直接用舊的，不會重複建立。
*/
if(!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
}

/**
 * [ 統一匯出 clientPromise ]
 * 其他檔案只要 import clientPromise 就能取得 同一個資料庫連線，不用每次都 .connect()。
 */
clientPromise = global._mongoClientPromise;

export default clientPromise;
