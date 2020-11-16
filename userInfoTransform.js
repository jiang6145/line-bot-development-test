// 利用正則表達式將使用者輸入的貨幣訊息轉為所需字串
const regExps = [
  {
    regExp: /^美[金元]$|^USD$/i,
    exrate: 'USDTWD'
  },
  {
    regExp: /^歐[元幣]$|^EUR$/i,
    exrate: 'USDEUR'
  },
  {
    regExp: /^日[幣元圓]$|^JPY$/i,
    exrate: 'USDJPY'
  },
  {
    regExp: /^港[幣元]$|^HKD$/i,
    exrate: 'USDHKD'
  },
  {
    regExp: /^英鎊$|^GBP$/i,
    exrate: 'USDGBP'
  },
  {
    regExp: /^瑞士(法郎|幣)$|^CHF$/i,
    exrate: 'USDCHF'
  },
  {
    regExp: /^人民幣$|^CNY$/i,
    exrate: 'USDCNY'
  },
  {
    regExp: /^韓[幣元]$|^KRW$/i,
    exrate: 'USDKRW'
  },
  {
    regExp: /^澳[幣元]$|^AUD$/i,
    exrate: 'USDAUD'
  },
  {
    regExp: /^紐西蘭[幣元]$|^NZD$/i,
    exrate: 'USDNZD'
  },
  {
    regExp: /^新加坡[幣元]$|^SGD$/i,
    exrate: 'USDSGD'
  },
  {
    regExp: /^泰[銖幣元]$|^THB$/i,
    exrate: 'USDTHB'
  },
  {
    regExp: /^瑞典(克朗|幣)$|^SEK$/i,
    exrate: 'USDSEK'
  },
  {
    regExp: /^馬來西亞幣$|^令吉$|^MYR$/i,
    exrate: 'USDMYR'
  },
  {
    regExp: /^(加拿大|加)[幣元]$|^CAD$/i,
    exrate: 'USDCAD'
  },
  {
    regExp: /^越南[幣盾]$|^VND$/i,
    exrate: 'USDVND'
  },
  {
    regExp: /^澳門[幣元]$|^MOP$/i,
    exrate: 'USDMOP'
  },
  {
    regExp: /^菲律賓(披|比)索$|^PHP$/i,
    exrate: 'USDPHP'
  },
  {
    regExp: /^印尼[幣盾]$|^IDR$/i,
    exrate: 'USDIDR'
  },
  {
    regExp: /^南非幣$|^蘭特$|^ZAR$/i,
    exrate: 'USDZAR'
  }
]

const infoTransform = (userMessage) => {
  regExps.forEach((item) => {
    if (item.regExp.test(userMessage)) return item.exrate
  })
}
