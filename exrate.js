import axios from 'axios'

const exrateHabdler = async (currency) => {
  try {
    const response = await axios.get('https://tw.rter.info/capi.php')
    const exrateData = response.data
    for (const key in exrateData) {
      if (currency === key) return exrateData[key].Exrate
    }
  } catch (error) {
    return '找不到此匯率'
  }
}

export default {
  exrateHabdler
}
