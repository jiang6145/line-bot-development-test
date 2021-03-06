import linebot from 'linebot'
import dotenv from 'dotenv'
import numeral from 'numeral'
import cheerio from 'cheerio'
import axios from 'axios'

import { searchExrateQuickReply, exrateFlexReply, exchangeFlexReply, booksCarouselReply, newsCarouselReply, banksFlexReply } from './handlers/replyContent.js'
import { userMsgTransform } from './handlers/userMsgTransform.js'
import { exrateHandler } from './handlers/exrate.js'
import { booksHandler } from './handlers/books.js'
import { newsHandler } from './handlers/news.js'
import { exchangeBankHandler } from './handlers/exchangeBank.js'

// 讀取 .env 設定檔
dotenv.config()

// 設定 LINE BOT
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

const exrateData = {}
const positiveNum = /^[0-9]+(.[0-9]{1,5})?$/ // regExp => 正數 (包含小數 0~5 位)
const positiveInteger = /^[0-9]*[1-9][0-9]*$/ // regExp => 正整數

bot.on('message', async (event) => {
  try {
    const userMsg = event.message.text.trim()

    if (userMsg === '查詢匯率') return event.reply(searchExrateQuickReply)

    if (userMsg.startsWith('$')) {
      const { currencyName, exrateKey } = userMsgTransform(userMsg)
      exrateHandler(exrateKey).then(result => {
        const { exrate, updateTime } = result
        exrateData.currency = currencyName
        exrateData.currencyAcronym = exrateKey === 'USDTWD' ? 'USD' : exrateKey.substr(3)
        exrateData.exrate = exrate

        return event.reply(exrateFlexReply(currencyName, exrate, updateTime))
      })
    }

    if (positiveNum.test(userMsg) && Object.keys(exrateData).length !== 0) {
      const money = numeral(userMsg)
      let moneyClone = money.clone()
      let exchangeResult = money.multiply(exrateData.exrate)

      // 如果換匯結果為整數, 格式 => 1,000 , 帶有小數時的格式 => 1,000.00 (只取兩位小數)
      exchangeResult = positiveInteger.test(exchangeResult.value()) ? exchangeResult.format('0,0') : exchangeResult.format('0,0.00')
      moneyClone = positiveInteger.test(moneyClone.value()) ? moneyClone.format('0,0') : moneyClone.format('0,0.00')

      return event.reply(exchangeFlexReply(exrateData.currency, moneyClone, exchangeResult))
    }

    if (userMsg === '外匯理財暢銷書') {
      booksHandler().then(result => {
        return event.reply(booksCarouselReply(result))
      })
    }

    if (userMsg === '外匯相關新聞') {
      newsHandler().then(result => {
        return event.reply(newsCarouselReply(result))
      })
    }

    if (userMsg === '最佳換匯銀行' && Object.keys(exrateData).length !== 0) {
      exchangeBankHandler(exrateData.currencyAcronym, exrateData.currency).then(result => {
        if (result.datas.length < 25) event.reply(banksFlexReply(result, 1))
        else event.reply([banksFlexReply(result, 1), banksFlexReply(result, 2)])
      })
    }
  } catch (error) {
    console.log('index.js Error', error)
  }
})

bot.on('postback', (event) => {
  const userPostback = event.postback.data

  try {
    if (userPostback === '金額試算') return event.reply(`要換多少${exrateData.currency}?`)
    if (userPostback === '查詢其它幣別') return event.reply(searchExrateQuickReply)
  } catch (error) {
    console.log('index.js Error', error)
  }
})

// 監聽 PORT
bot.listen('/', process.env.PORT, () => {
  console.log('LINE-BOT 已啟動')
})
