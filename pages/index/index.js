const app=getApp();
Page({
  data: {
    multiArray: [['松林', '珙桐', '银杏', '香樟', '芙蓉'], ['1', '2', '3', '4', '5'],[],['101','102','103','104']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '松林'
        },
        {
          id: 1,
          name: '珙桐'
        },
      
        {
          id: 2,
          name: '银杏'
        },
        {
          id: 3,
          name: '香樟'
        },
        {
          id: 4,
          name: '芙蓉'
        }],
        [
        {
          id: 0,
          name: '1'
        },
        {
          id: 1,
          name: '2'
        },
      
        {
          id: 2,
          name: '3'
        },
        {
          id: 3,
          name: '4'
        },
        {
          id:4,
          name:'5'
        }],
        [
          {
            id: 0,
            name: 'A'
          },
          {
            id: 1,
            name: 'B'
          }
        ],
        [{
          id: 0,
          name: '101'
        },
        {
          id: 1,
          name: '102'
        },

        {
          id: 2,
          name: '103'
        },
        {
          id: 3,
          name: '104'
        },
        {
          id: 4,
          name: '105'
        }
        ]

      ],
    
    multiIndex: [0, 0, 0],
   
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['1', '2', '3', '4', '5'];
            data.multiArray[2] = [];
            data.multiArray[3] = ['101', '102', '103', '104', '105'];
            break;
          case 1:
            data.multiArray[1] = ['1', '2', '3', '4', '5'];
            data.multiArray[2] = [];
            data.multiArray[3] = ['101', '102', '103', '104', '105'];
            
            break;
          case 2:
            data.multiArray[1] = ['1', '2', '3', '4', '5'];
            data.multiArray[2] = [];
            data.multiArray[3] = ['101', '102', '103', '104', '105'];
            
            break;
          case 3:
            data.multiArray[1] = ['1', '2', '3', '4', '5'];
            data.multiArray[2] = ['A', 'B'];
            data.multiArray[3] = ['101', '102', '103', '104', '105'];
            break;
          case 4:
            data.multiArray[1] = ['1', '2', '3', '4', '5'];
            data.multiArray[2] = [];
            data.multiArray[3] = ['101', '102', '103', '104', '105'];
            
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
     
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },
  toDetail: function (e) {
    // console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var proList = this.data.proList;
    var title = proList[index].title;
    wx.setStorageSync("title", proList[index].title);
    wx.setStorageSync("index", e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '/pages/detail/detail?title=' + title //传递数据到其他页面
    })
    //也可以通过本地缓存传值
    // wx.setStorageSync('title', title)
  },
  upload: function () {
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://photo-1256489440.cos.ap-chengdu.myqcloud.com', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something
          }
        })
      }
    })
  }
})