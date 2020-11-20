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

export const exrateFlexReply = (currencyName, exrate, updateTime) => {
  return {
    type: 'flex',
    altText: 'this is a flex message',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: currencyName,
            weight: 'bold',
            size: 'sm',
            align: 'center',
            margin: 'none'
          },
          {
            type: 'text',
            text: exrate,
            weight: 'bold',
            size: '3xl',
            margin: 'lg',
            align: 'center'
          },
          {
            type: 'text',
            text: updateTime,
            size: 'xxs',
            color: '#aaaaaa',
            wrap: true,
            align: 'center',
            margin: 'xl'
          }
        ],
        paddingAll: 'xxl'
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            action: {
              type: 'postback',
              label: '金額試算',
              data: '金額試算'
            }
          },
          {
            type: 'separator',
            color: '#FFFFFF'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: '查詢其它幣別',
              data: '查詢其它幣別'
            }
          }
        ],
        backgroundColor: '#D1DDDB'
      },
      styles: {
        footer: {
          separator: true
        }
      }
    }
  }
}

export const exchangeFlexReply = (currency, money, exchangeResult) => {
  return {
    type: 'flex',
    altText: 'this is a flex message',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '台幣',
                align: 'center',
                size: 'sm',
                weight: 'bold',
                color: '#2980B9'
              },
              {
                type: 'text',
                text: exchangeResult,
                align: 'center',
                size: 'lg',
                margin: 'md'
              }
            ]
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '⇄',
                align: 'center',
                size: 'xxl',
                weight: 'bold',
                color: '#aaaaaa'
              }
            ],
            width: '10%',
            justifyContent: 'center'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: currency,
                align: 'center',
                size: 'sm',
                weight: 'bold',
                color: '#16A085'
              },
              {
                type: 'text',
                text: money,
                align: 'center',
                size: 'lg',
                margin: 'md'
              }
            ]
          }
        ]
      },
      styles: {
        footer: {
          separator: true
        }
      }
    }
  }
}

export const booksCarouselReply = (bookDatas) => {
  const reply = {
    type: 'flex',
    altText: 'this is a flex message',
    contents: {
      type: 'carousel',
      contents: []
    }
  }

  for (const book of bookDatas) {
    reply.contents.contents.push({
      type: 'bubble',
      hero: {
        type: 'image',
        url: book.imgLink,
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover',
        action: {
          type: 'uri',
          uri: book.imgLink
        }
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: book.title,
            weight: 'bold',
            size: 'xl'
          },
          {
            type: 'text',
            text: book.present,
            size: 'xxs',
            margin: 'xl',
            color: '#aaaaaa'
          }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            style: 'link',
            height: 'sm',
            action: {
              type: 'uri',
              label: '前往查看',
              uri: book.href
            }
          }
        ],
        flex: 0
      }
    })
  }
}
