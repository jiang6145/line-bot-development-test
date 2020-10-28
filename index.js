// 引用套件 (Node.js 規定 import 全都要放在文件最上面)
import linebot from 'linebot'
import dotenv from 'dotenv'
import axios from 'axios'
import inly from 'inly'
import path from 'path'
import fs from 'fs' // node.js 檔案讀寫的套件

// 讀取 .env 設定檔
dotenv.config()

// 設定 LINE BOT
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

const cwd = process.cwd() // 取得 Node 當前執行的工作目錄路徑
const name = 'TCMSV_alldesc.gz' // 檔案名稱
const to = cwd
const from = path.join(cwd, name)

// 監聽 PORT
bot.listen('/', process.env.PORT, () => {
  console.log('LINE-BOT 已啟動')
})

// 下載台北市開放資料停車位 API 的 gz檔
async function getData () {
  try {
    // Download File
    const result = await axios({
      url: 'https://tcgbusfs.blob.core.windows.net/blobtcmsv/TCMSV_alldesc.gz',
      method: 'get',
      responseType: 'arraybuffer' // 請求到的檔案類型, 如果沒設定為 arraybuffer 下載後則不會是正確的類型
    })
    fs.writeFileSync(from, result.data) // 寫入檔案, 在 Node 環境讀寫檔案要使用 .fs 函式
    const extract = inly(from, to) // 解壓縮檔案

    // Get Data
    const file = fs.readFileSync(cwd + '/TCMSV_alldesc') // 取得解壓縮產生的 TCMSV_alldesc 檔案
    const json = JSON.parse(file)
    console.log(json)
  } catch (error) {
    console.log(error)
    console.log('找不到檔案')
  }
}
getData()
