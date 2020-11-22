import axios from 'axios'
import cheerio from 'cheerio'

export const newsHandler = async () => {
  try {
    const newsDatas = []

    const response = await axios.get('https://news.cnyes.com/news/cat/forex?exp=a')
    const $ = cheerio.load(response.data)

    for (let i = 0; i < 10; i++) {
      const title = $('._2bFl.theme-list ._1Zdp').eq(i).attr('title')
      const link = $('._2bFl.theme-list ._1Zdp').eq(i).attr('href')
      const time = $('._2bFl.theme-list ._1Zdp').eq(i).find('time[datetime]').attr('datetime')
      const imgSrc = $('._2bFl.theme-list ._1Zdp').eq(i).find('img').attr('src')

      newsDatas.push({
        title,
        link: 'https://news.cnyes.com' + link,
        time: new Date(time).toLocaleString(),
        imgSrc: imgSrc.replace('/s/', '/l/')
      })
    }

    return newsDatas
  } catch (error) {
    console.log('news.js Error', error)
  }
}
