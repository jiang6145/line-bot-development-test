// 圖文選單中查詢匯率的 quick reply
export const searchExrateQuickReply = {
  type: 'text',
  text: '選擇或輸入 $幣別',
  quickReply: {
    items: [
      {
        type: 'action',
        action: {
          type: 'message',
          label: '美金',
          text: '$美金'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '日幣',
          text: '$日幣'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '英鎊',
          text: '$英鎊'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '歐元',
          text: '$歐元'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '人民幣',
          text: '$人民幣'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '港幣',
          text: '$港幣'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '韓元',
          text: '$韓元'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '泰銖',
          text: '$泰銖'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '新加坡幣',
          text: '$新加坡幣'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '加拿大幣',
          text: '$加拿大幣'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '澳幣',
          text: '$澳幣'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '瑞典幣',
          text: '$瑞典幣'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '南非幣',
          text: '$南非幣'
        }
      }
    ]
  }
}

// export const exrateFlexReply = () => {
//   return {

//   }
// }
