import axios from 'axios'
import cheerio from 'cheerio'

export const booksHandler = async () => {
  try {
    const booksDatas = []

    const response = await axios.get('https://search.books.com.tw/search/query/cat/all/key/%E5%A4%96%E5%8C%AF%E6%8A%95%E8%B3%87/ms2/ms2_1/sort/9')
    const $ = cheerio.load(response.data)

    for (let i = 0; i < 5; i++) {
      const title = ($('.searchbook .item').eq(i).children('a').attr('title'))
      const href = ($('.searchbook .item').eq(i).children('a').attr('href'))
      const present = ($('.searchbook .item').eq(i).children('p').text())
      // 圖片為動態載入, 還沒解決抓取方式

      booksDatas.push({
        title,
        present,
        href
      })
    }
    return booksDatas
  } catch (error) {
    console.log('books.js Error', error)
  }
}
