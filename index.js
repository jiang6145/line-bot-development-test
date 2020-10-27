// 引用 linebot 與 dotenv 套件
import linebot from 'linebot'
import dotenv from 'dotenv'

// 讀取 .env 設定檔
dotenv.config()

// 設定 LINE BOT
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// 當使用者傳送訊息時
bot.on('message', (event) => {
  console.log(event.message.text)
  event.reply(event.message.text)
})

// 監聽 PORT
bot.listen('/', process.env.PORT, () => {
  console.log('LINE-BOT 已啟動')
})
