// import line from '@line/bot-sdk'
import linebot from 'linebot'
import dotenv from 'dotenv'
import axios from 'axios'

import { searchExrateQuickReply, exrateFlexReply } from './handlers/replyContent.js'
import { userMsgTransform } from './handlers/userMsgTransform.js'
import { exrateHabdler } from './handlers/exrate.js'
// 讀取 .env 設定檔
dotenv.config()

// 設定 LINE BOT
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  try {
    const userMsg = event.message.text.trim()

    if (userMsg === '查詢匯率') return event.reply(searchExrateQuickReply)

    if (userMsg.startsWith('$')) {
      const currency = userMsgTransform(userMsg)
      exrateHabdler(currency).then(result => {
        return event.reply(exrateFlexReply())
      })
    }
  } catch (error) {
    console.log('index.js Error', error)
  }
})

// 監聽 PORT
bot.listen('/', process.env.PORT, () => {
  console.log('LINE-BOT 已啟動')
})
