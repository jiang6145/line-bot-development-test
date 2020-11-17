import axios from 'axios'

export const exrateHabdler = async (currency) => {
  try {
    const response = await axios.get('https://tw.rter.info/capi.php')
    const exrateData = response.data

    for (const key in exrateData) {
      if (currency === key) {
        // 因匯率 API 均以美金報價, 如果要以台幣兌換日幣的匯率, 需要以台幣兌美金匯率 / 日幣兌美金匯率 = 臺幣兌日幣匯率
        const basicExrate = exrateData.USDTWD.Exrate
        const exchangeExrate = (currency === 'USDTWD') ? 1 : exrateData[key].Exrate
        const exrate = (basicExrate / exchangeExrate).toFixed(2)
        return exrate
      }
    }
  } catch (error) {
    console.log('exrate.js Error', error)
    return '找不到此匯率'
  }
}
