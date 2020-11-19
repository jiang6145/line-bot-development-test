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

export const exrateFlexReply = () => {
  return {
    type: 'flex',
    altText: 'this is a flex message',
    contents: {
      type: 'bubble',
      size: 'kilo',
      hero: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: '美金',
            align: 'center',
            size: 'lg',
            weight: 'bold',
            color: '#9D9D9D'
          },
          {
            type: 'text',
            text: '28.52',
            size: '4xl',
            align: 'center'
          },
          {
            type: 'text',
            text: '2020/11/19',
            align: 'center',
            size: 'xs',
            color: '#9D9D9D'
          }
        ],
        paddingTop: 'xl',
        paddingBottom: 'none'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'separator',
            color: '#02C874'
          },
          {
            type: 'text',
            align: 'center',
            action: {
              type: 'postback',
              label: '兌換試算',
              data: '兌換試算'
            },
            text: '兌換試算',
            weight: 'bold',
            size: 'md',
            color: '#02C874',
            margin: 'xl'
          },
          {
            type: 'separator',
            color: '#02C874',
            margin: 'md'
          },
          {
            type: 'text',
            text: '查詢其它幣別',
            action: {
              type: 'postback',
              label: '查詢其它幣別',
              data: '查詢其它幣別'
            },
            size: 'md',
            weight: 'bold',
            align: 'center',
            color: '#02C874',
            margin: 'xl'
          }
        ],
        margin: 'none',
        paddingEnd: 'none',
        paddingStart: 'none'
      }
    }
  }
}
