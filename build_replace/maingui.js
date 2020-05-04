maingui = {
  winSearch: {
    Type: 'weWindow',
    L: 500,
    T: 40,
    W: 300,
    H: 440,
    MinBtn: true,
    Data: {
      HTMLEncode: true,
      Text: 'Search Interface'
    },
    Controls: {
      tabMain: {
        Type: 'wePages',
        L: 0,
        T: 0,
        R: 0,
        B: 0,
        Data: {
          HTMLEncode: true,
          Page: 0
        },
        Pages: [
          {
            Text: 'Keywords',
            Controls: {
              listKeywords: {
                Type: 'weList',
                L: 2,
                T: 7,
                H: 300,
                R: 2,
                style: { borderStyle: 'dashed' },
                Data: {
                  HTMLEncode: true,
                  Items: [
                    { Text: 'Allen' },
                    { Text: 'Bill' }
                  ]
                }
              },
              btAdd: {
                Type: 'weButton',
                L: 8,
                T: 314,
                W: 130,
                Data: {
                  HTMLEncode: true,
                  Text: 'Add'
                },
                Events: {
                  OnClick: function () {
                    var list = AppForm.winSearch.Controls.listKeywords;
                    ngMessageDlg('weDlgInputBox', 'Please enter a new keyword: ', '', function (c) {
                      if (c.DialogResult == mbOK) {
                        var keyword = c.Controls.Edit.GetText();
                        list.AddItems([{ Text: keyword }]);
                        list.Update();
                        //select all tokens whose index mentioned that keyword

                        //get tokens from model result
                        var tokens = localStorage["tokens_query"];
                        tokens.forEach(token=>{
                          //select all tokens (entity) mentioned by this token
                          if (token.value == keyword){
                            TokensHandler.selectAllTokens(token.index);
                          }
                        })
                      }
                      return true;
                    }, {});
                  }
                }
              },
              btRemove: {
                Type: 'weButton',
                L: 140,
                T: 314,
                W: 130,
                Data: {
                  HTMLEncode: true,
                  Text: 'Remove'
                },
                Events: {
                  OnClick: function () {
                    var list = AppForm.winSearch.Controls.listKeywords;
                    var item = list.GetSelected()[0];
                    var keyword = item.Text;
                        if (!item)
                          return;
                        list.Remove(item);
                        list.Update();
                    var tokens = localStorage["tokens_query"];
                        tokens.forEach(token=>{
                          //deselect all tokens (entity) mentioned by this token
                          if (token.value == keyword){
                            TokensHandler.deselectAllTokens(token.index);
                          }
                    })
                  }
                }
              }
            }
          },
          {
            Text: 'Merge Index',
            Controls: {
              weLabel1: {
                Type: 'weLabel',
                L: 10,
                T: 7,
                Data: {
                  HTMLEncode: true,
                  Text: 'Index A'
                }
              },
              weLabel2: {
                Type: 'weLabel',
                L: 10,
                T: 47,
                Data: {
                  HTMLEncode: true,
                  Text: 'Index B'
                }
              },
              tfNumA: {
                Type: 'weEditNum',
                L: 110,
                T: 7,
                W: 160,
                Data: { Text: 'tfNumA' }
              },
              tfNumB: {
                Type: 'weEditNum',
                L: 110,
                T: 47,
                W: 160,
                Data: { Text: 'tfNumA' }
              },
              btMerge: {
                Type: 'weButton',
                L: 0,
                T: 99,
                R: 0,
                Data: {
                  HTMLEncode: true,
                  Text: 'Merge'
                },
                Events: {
                  OnClick: function () {
                    var numA = AppForm.winSearch.Controls.tfNumA.GetText();
                    var numB = AppForm.winSearch.Controls.tfNumB.GetText();
                    TokensHandler.mergeIndex(numA, numB);
                    }
                    
                  }
              }
            }
          }
        ]
      }
    }
  }
}

;