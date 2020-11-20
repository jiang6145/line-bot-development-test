import axios from 'axios'

export const exrateHandler = async (exrateKey) => {
  try {
    const response = await axios.get('https://tw.rter.info/capi.php')
    const exrateDatas = response.data

    for (const key in exrateDatas) {
      if (exrateKey === key) {
        // 因匯率 API 均以美金報價, 如果要以台幣兌換日幣的匯率, 需要以台幣兌美金匯率 / 日幣兌美金匯率 = 臺幣兌日幣匯率
        const basicExrate = exrateDatas.USDTWD.Exrate
        const exchangeExrate = (exrateKey === 'USDTWD') ? 1 : exrateDatas[key].Exrate
        const exrate = (basicExrate / exchangeExrate).toFixed(2)
        const updateTime = exrateDatas[key].UTC
        return {
          exrate,
          updateTime
        }
      }
    }
  } catch (error) {
    console.log('exrate.js Error', error)
    return '找不到此匯率'
  }
}
