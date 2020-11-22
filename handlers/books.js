import axios from 'axios'
import cheerio from 'cheerio'

export const booksHandler = async () => {
  try {
    const bookDatas = []

    const response = await axios.get('https://www.books.com.tw/web/sys_bbotm/books/020907/?v=1&o=5')
    const $ = cheerio.load(response.data)

    for (let i = 0; bookDatas.length < 10; i++) {
      const title = $('.mod_a .item').eq(i).find('img.cover').attr('alt')
      const link = $('.mod_a .item').eq(i).children('a').attr('href')

      let imgSrc = $('.mod_a .item').eq(i).find('img.cover').attr('src')
      imgSrc = imgSrc.replace('w=170', 'w=348')
      imgSrc = imgSrc.replace('h=170', 'h=348')

      bookDatas.push({
        title,
        link,
        imgSrc
      })
    }

    return bookDatas
  } catch (error) {
    console.log('books.js Error', error)
  }
}
