// import line from '@line/bot-sdk'
import linebot from 'linebot'
import dotenv from 'dotenv'
import axios from 'axios'

import exrate from './exrate.js'
import replyTemplate from './replyTemplate.js'

// 讀取 .env 設定檔
dotenv.config()

// 設定 LINE BOT
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  const userMessage = event.message.text.trim()
  if (userMessage === '查詢匯率') {
    event.reply(replyTemplate.searchExrate)
  }

  // exrate.exrateHabdler(userMessage).then(result => {
  //   console.log(result)
  //   event.reply(result.toString())
  // })
})

// 監聽 PORT
bot.listen('/', process.env.PORT, () => {
  console.log('LINE-BOT 已啟動')
})
