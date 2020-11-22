import axios from 'axios'
import cheerio from 'cheerio'

export const exchangeBankHandler = async () => {
  try {
    const bankDatas = []

    const response = await axios.get('https://www.findrate.tw/USD/')
    const $ = cheerio.load(response.data)
    const items = $('table[border] tr') // 抓回資料最後多兩個空元素將其扣掉

    for (let i = 1; i < items.length - 2; i++) {
      const bank = items.eq(i).find('.bank a').text()
      const cashBuy = items.eq(i).find('.WordB').eq(0).text()
      const cashSell = items.eq(i).find('.WordB').eq(1).text()
      const spotBuy = items.eq(i).find('.WordB').eq(2).text()
      const spotSell = items.eq(i).find('.WordB').eq(3).text()

      bankDatas.push({
        bank,
        cashBuy,
        cashSell,
        spotBuy,
        spotSell
      })
    }

    return bankDatas
  } catch (error) {
    console.log('exchangeBank.js Error', error)
  }
}
