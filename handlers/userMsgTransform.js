// 利用正則表達式將使用者輸入的貨幣訊息轉為所需字串
const controlData = [
  {
    regExp: /^美[金元]$|^USD$/i,
    exrateKey: 'USDTWD'
  },
  {
    regExp: /^歐[元幣]$|^EUR$/i,
    exrateKey: 'USDEUR'
  },
  {
    regExp: /^日[幣元圓]$|^JPY$/i,
    exrateKey: 'USDJPY'
  },
  {
    regExp: /^港[幣元]$|^HKD$/i,
    exrateKey: 'USDHKD'
  },
  {
    regExp: /^英鎊$|^GBP$/i,
    exrateKey: 'USDGBP'
  },
  {
    regExp: /^瑞士(法郎|幣)$|^CHF$/i,
    exrateKey: 'USDCHF'
  },
  {
    regExp: /^人民幣$|^CNY$/i,
    exrateKey: 'USDCNY'
  },
  {
    regExp: /^韓[幣元]$|^KRW$/i,
    exrateKey: 'USDKRW'
  },
  {
    regExp: /^澳[幣元]$|^AUD$/i,
    exrateKey: 'USDAUD'
  },
  {
    regExp: /^紐西蘭[幣元]$|^NZD$/i,
    exrateKey: 'USDNZD'
  },
  {
    regExp: /^新加坡[幣元]$|^SGD$/i,
    exrateKey: 'USDSGD'
  },
  {
    regExp: /^泰[銖幣元]$|^THB$/i,
    exrateKey: 'USDTHB'
  },
  {
    regExp: /^瑞典(克朗|幣)$|^SEK$/i,
    exrateKey: 'USDSEK'
  },
  {
    regExp: /^馬來西亞幣$|^令吉$|^MYR$/i,
    exrateKey: 'USDMYR'
  },
  {
    regExp: /^(加拿大|加)[幣元]$|^CAD$/i,
    exrateKey: 'USDCAD'
  },
  {
    regExp: /^越南[幣盾]$|^VND$/i,
    exrateKey: 'USDVND'
  },
  {
    regExp: /^澳門[幣元]$|^MOP$/i,
    exrateKey: 'USDMOP'
  },
  {
    regExp: /^菲律賓(披|比)索$|^PHP$/i,
    exrateKey: 'USDPHP'
  },
  {
    regExp: /^印尼[幣盾]$|^IDR$/i,
    exrateKey: 'USDIDR'
  },
  {
    regExp: /^南非幣$|^蘭特$|^ZAR$/i,
    exrateKey: 'USDZAR'
  }
]

export const userMsgTransform = (userMsg) => {
  const currencyMsg = userMsg.substr(1)

  for (const data of controlData) {
    if (data.regExp.test(currencyMsg)) {
      return data.exrateKey
    }
  }
}
