// 利用正則表達式將使用者輸入的貨幣訊息轉為所需字串
const controlData = [
  {
    regExp: /^美[金元]$|^USD$/i,
    currencyName: '美金',
    exrateKey: 'USDTWD'
  },
  {
    regExp: /^歐[元幣]$|^EUR$/i,
    currencyName: '歐元',
    exrateKey: 'USDEUR'
  },
  {
    regExp: /^日[幣元圓]$|^JPY$/i,
    currencyName: '日幣',
    exrateKey: 'USDJPY'
  },
  {
    regExp: /^港[幣元]$|^HKD$/i,
    currencyName: '港幣',
    exrateKey: 'USDHKD'
  },
  {
    regExp: /^英鎊$|^GBP$/i,
    currencyName: '英鎊',
    exrateKey: 'USDGBP'
  },
  {
    regExp: /^瑞士(法郎|幣)$|^CHF$/i,
    currencyName: '瑞士法郎',
    exrateKey: 'USDCHF'
  },
  {
    regExp: /^人民幣$|^CNY$/i,
    currencyName: '人民幣',
    exrateKey: 'USDCNY'
  },
  {
    regExp: /^韓[幣元]$|^KRW$/i,
    currencyName: '韓幣',
    exrateKey: 'USDKRW'
  },
  {
    regExp: /^澳[幣元]$|^AUD$/i,
    currencyName: '澳幣',
    exrateKey: 'USDAUD'
  },
  {
    regExp: /^紐西蘭[幣元]$|^NZD$/i,
    currencyName: '紐西蘭幣',
    exrateKey: 'USDNZD'
  },
  {
    regExp: /^新加坡[幣元]$|^SGD$/i,
    currencyName: '新加坡幣',
    exrateKey: 'USDSGD'
  },
  {
    regExp: /^泰[銖幣元]$|^THB$/i,
    currencyName: '泰銖',
    exrateKey: 'USDTHB'
  },
  {
    regExp: /^瑞典(克朗|幣)$|^SEK$/i,
    currencyName: '瑞典幣',
    exrateKey: 'USDSEK'
  },
  {
    regExp: /^馬來西亞幣$|^令吉$|^MYR$/i,
    currencyName: '馬來西亞幣',
    exrateKey: 'USDMYR'
  },
  {
    regExp: /^(加拿大|加)[幣元]$|^CAD$/i,
    currencyName: '加拿大幣',
    exrateKey: 'USDCAD'
  },
  {
    regExp: /^越南[幣盾]$|^VND$/i,
    currencyName: '越盾',
    exrateKey: 'USDVND'
  },
  {
    regExp: /^澳門[幣元]$|^MOP$/i,
    currencyName: '澳門幣',
    exrateKey: 'USDMOP'
  },
  {
    regExp: /^菲律賓(披|比)索$|^PHP$/i,
    currencyName: '菲律賓披索',
    exrateKey: 'USDPHP'
  },
  {
    regExp: /^印尼[幣盾]$|^IDR$/i,
    currencyName: '印尼盾',
    exrateKey: 'USDIDR'
  },
  {
    regExp: /^南非幣$|^蘭特$|^ZAR$/i,
    currencyName: '南非幣',
    exrateKey: 'USDZAR'
  }
]

export const userMsgTransform = (userMsg) => {
  const currencyMsg = userMsg.substr(1)

  for (const data of controlData) {
    if (data.regExp.test(currencyMsg)) {
      return {
        currencyName: data.currencyName,
        exrateKey: data.exrateKey
      }
    }
  }
}
