// 引用 linebot, dotenv, axios 套件 (Node.js 規定 import 全都要放在文件最上面)
import linebot from 'linebot'
import dotenv from 'dotenv'
import axios from 'axios'

// 讀取 .env 設定檔
dotenv.config()

// 設定 LINE BOT
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// 當使用者傳送訊息時
bot.on('message', async (event) => {
  try {
    const response = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
    const text = event.message.text
    let reply = ''
    for (const data of response.data) {
      if (data.title === text) {
        reply = data.showInfo[0].locationName
        break
      }
    }

    reply = (reply.length === 0) ? '找不到資料' : reply
    event.reply(reply)
  } catch (error) {
    event.reply('發生錯誤')
  }
})

// 監聽 PORT
bot.listen('/', process.env.PORT, () => {
  console.log('LINE-BOT 已啟動')
})
