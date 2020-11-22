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
      size: 'mega',
      header: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: book.imgSrc,
            size: '4xl'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'HOT',
                size: 'xxs',
                color: '#ffffff',
                align: 'center',
                offsetTop: '4.5px',
                weight: 'bold'
              }
            ],
            width: '53px',
            height: '23px',
            backgroundColor: '#ff334b',
            position: 'absolute',
            offsetTop: '15px',
            offsetStart: '15px',
            cornerRadius: '20px'
          }
        ]
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: book.title,
                size: 'md',
                weight: 'bold',
                color: '#ffffff',
                wrap: true
              }
            ]
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '前往博客來查看',
                color: '#ffffff',
                size: 'xs',
                align: 'center',
                gravity: 'bottom'
              }
            ],
            margin: 'xl',
            borderWidth: '1px',
            borderColor: '#ffffff',
            cornerRadius: '6px',
            paddingAll: 'md',
            action: {
              type: 'uri',
              uri: book.link,
              label: '前往博客來查看',
              altUri: {
                desktop: book.link
              }
            }
          }
        ],
        backgroundColor: '#464F69',
        justifyContent: 'space-between'
      }
    })
  }

  return reply
}

export const newsCarouselReply = (newsDatas) => {
  const reply = {
    type: 'flex',
    altText: 'this is a flex message',
    contents: {
      type: 'carousel',
      contents: []
    }
  }

  for (const news of newsDatas) {
    reply.contents.contents.push({
      type: 'bubble',
      hero: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: news.imgSrc,
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '2:1'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'NEWS',
                size: 'xxs',
                color: '#ffffff',
                align: 'center',
                offsetTop: '4.5px'
              }
            ],
            width: '53px',
            height: '23px',
            backgroundColor: '#ff334b',
            cornerRadius: '20px',
            position: 'absolute',
            offsetTop: '15px',
            offsetStart: '15px'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: news.time,
                color: '#ffffff',
                size: 'xxs',
                align: 'end'
              }
            ],
            position: 'absolute',
            width: '100%',
            offsetBottom: '0px',
            backgroundColor: '#00000055',
            paddingStart: '10px',
            paddingEnd: '10px',
            paddingTop: '3px',
            paddingBottom: '3px'
          }
        ],
        paddingAll: 'none'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: news.title,
                color: '#ffffff',
                weight: 'bold',
                size: 'md',
                wrap: true
              }
            ]
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '新　聞　內　容',
                action: {
                  type: 'uri',
                  label: '新　聞　內　容',
                  uri: news.link
                },
                color: '#ffffff',
                size: 'xs',
                align: 'center'
              }
            ],
            margin: 'xl',
            borderWidth: '1px',
            borderColor: '#ffffff',
            cornerRadius: '6px',
            paddingAll: 'md'
          }
        ],
        backgroundColor: '#464F69',
        justifyContent: 'space-between'
      }
    })
  }

  return reply
}

export const banksFlexReply = (bankDatas) => {
  const reply = {
    type: 'flex',
    altText: 'this is a flex message',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: '各家銀行 - 美金牌告匯率',
                    size: 'xs',
                    weight: 'bold',
                    color: '#ffffff',
                    align: 'center'
                  }
                ],
                paddingTop: 'md',
                paddingBottom: 'md'
              },
              {
                type: 'separator'
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'text',
                        text: '銀行',
                        size: 'xs',
                        align: 'center',
                        color: '#ffffff',
                        weight: 'bold'
                      }
                    ],
                    width: '20%'
                  },
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'text',
                        text: '現鈔買入',
                        size: 'xs',
                        align: 'center',
                        color: '#ffffff',
                        weight: 'bold'
                      }
                    ],
                    width: '20%'
                  },
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'text',
                        text: '現鈔賣出',
                        size: 'xs',
                        align: 'center',
                        color: '#ffffff',
                        weight: 'bold'
                      }
                    ],
                    width: '20%'
                  },
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'text',
                        text: '即期買入',
                        size: 'xs',
                        align: 'center',
                        color: '#ffffff',
                        weight: 'bold'
                      }
                    ],
                    width: '20%'
                  },
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'text',
                        text: '即期賣出',
                        size: 'xs',
                        align: 'center',
                        color: '#ffffff',
                        weight: 'bold'
                      }
                    ],
                    width: '20%'
                  }
                ],
                paddingTop: 'md',
                paddingBottom: 'md'
              }
            ],
            backgroundColor: '#464F69'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
            ]
          }
        ],
        paddingAll: 'none'
      },
      size: 'giga'
    }
  }

  const length = reply.contents.body.contents.length - 1

  for (let i = 0; i < 31; i++) {
    reply.contents.body.contents[length].contents.push(
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: bankDatas[i].bank,
                size: 'xs',
                align: 'center'
              }
            ],
            width: '20%',
            paddingAll: 'md'
          },
          {
            type: 'separator',
            color: '#333333'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: bankDatas[i].cashBuy,
                size: 'xs',
                align: 'center'
              }
            ],
            width: '20%',
            paddingAll: 'md'
          },
          {
            type: 'separator',
            color: '#333333'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: bankDatas[i].cashSell,
                size: 'xs',
                align: 'center'
              }
            ],
            width: '20%',
            paddingAll: 'md'
          },
          {
            type: 'separator',
            color: '#333333'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: bankDatas[i].spotBuy,
                size: 'xs',
                align: 'center'
              }
            ],
            width: '20%',
            paddingAll: 'md'
          },
          {
            type: 'separator',
            color: '#333333'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: bankDatas[i].spotSell,
                size: 'xs',
                align: 'center'
              }
            ],
            width: '20%',
            paddingAll: 'md'
          }
        ],
        backgroundColor: (i % 2 === 0) ? '#ffffff' : '#f1faee'
      }
    )
  }

  return reply
}
