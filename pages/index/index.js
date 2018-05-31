const app=getApp();

Page({
  data: {
    name:"",
    phoneNumber:"",
    copyNumber:"",
    singleOrdouble:"",
    multiIndex: [0, 0, 0],
    ExtraInformati1on:"",
    dormitry:[],
    formation:"",
    IsOkInformaion:false,
    pageNumber:"",
    
    //orderList:[],
    //propertyList:{},
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
    
    
   
  },
  
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dormitry: e.detail.value
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
  bindNameInput: function (e) {
    console.log('姓名：', e.detail.value)
    this.setData({
      name: e.detail.value
    })
    
  },
  bindPhoneInput: function (e) {
    console.log('电话：', e.detail.value)
    this.setData({
      phoneNumber: e.detail.value
    })
    
  },
  bindPageNumbernput:function(e){
    console.log('页数：', e.detail.value)
    this.setData({
      pageNumber: e.detail.value
    })
  },
  bindNumbernput: function (e) {
    console.log('份数：', e.detail.value)
    this.setData({
      copyNumber: e.detail.value
    })
    
  },
  bindContraryInput: function (e) {
    console.log('单双面：', e.detail.value)
   
    var value = e.detail.value
    
    if(value =="radio1"){
      this.setData({
        singleOrdouble:"单面"
        
      })
    }else{
      this.setData({
        singleOrdouble:"双面"
      })
    }
    
    
  },
  bindFormationInput: function (e) {
    console.log('格式：', e.detail.value)
    var value = e.detail.value
    if (value == 'radio1') {
      this.setData({
        formation:"Word"
      })
    } else {
      this.setData({
        formation:"PDF"
      })
    }
   
  },
  ExtraInformationInput: function (e) {
    console.log('备注：', e.detail.value)
    this.setData({
      ExtraInformation: e.detail.value
    })
    
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
  sureInformation:function(){
    console.log(this.data.dormitry)
    console.log(this.data.name)
    console.log(this.data.phoneNumber)
    console.log(this.data.copyNumber)
    console.log(this.data.singleOrdouble)
    console.log(this.data.formation)
    console.log(this.data.pageNumber)
    try {
      wx.setStorageSync('dormitry', this.data.multiIndex)
      wx.setStorageSync('name', this.data.name)
      wx.setStorageSync('phoneNumber', this.data.phoneNumber)
      wx.setStorageSync('copyNumber', this.data.copyNumber)
      wx.setStorageSync('singleOrdouble', this.data.singleOrdouble)
      wx.setStorageSync('formation', this.data.formation)
      wx.setStorageSync('extraInformation', this.data.ExtraInformation)
      wx.setStorageSync('pageNumber', this.data.pageNumber)
      
    } catch (e) {
      wx.showToast({
        title: '本地消息存储失败',
      })
    }
   
    var IsOkInformaio = this.data.IsOkInformaion
    var requestNumber = this.data.requestNumber
    var copyNumber = this.data.copyNumber
    var singleOrdouble = this.data.singleOrdouble
    var name = this.data.name
    var phoneNumber = this.data.phoneNumber
    var dormitry = this.data.dormitry
    var formation = this.data.formation
    var pageNumber = this.data.pageNumber
    var ExtraInformation = this.data.ExtraInformation
    if (copyNumber && singleOrdouble && name && phoneNumber && dormitry && formation && pageNumber) {
      wx.showToast({
        title: '输入信息成功',
        icon: 'success',
        duration: 1000
      })
      this.setData({
        IsOkInformaion: true
      })
      
    }else{
      wx.showModal({
        title: '温馨提示',
        content: '你还没有输入信息哦！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
     
    }
    
  
  },
  upload: function (e) {
    
    
    
    
    var IsOkInformaio=this.data.IsOkInformaion
    var requestNumber = this.data.requestNumber
    
    var copyNumber = this.data.copyNumber
    var singleOrdouble = this.data.singleOrdouble
    var name = this.data.name
    var phoneNumber = this.data.phoneNumber
    var dormitry = this.data.dormitry
    var formation = this.data.formation
    var pageNumber = this.data.pageNumber
    var ExtraInformation = this.data.ExtraInformation
    

    if(IsOkInformaio){
      app.globalData.requestNumber = app.globalData.requestNumber + 1
      console.log("request" + app.globalData.requestNumber)
      var date=new Date()
      var dateObject={}
      var dateList=[]
      dateObject.year=date.getFullYear()
      dateObject.month=date.getMonth()+1
      dateObject.day=date.getDate()
      dateList.push(dateObject)
      console.log(dateList)
      wx.setStorageSync('dateList', dateList)
      
        /*
       
        this.data.propertyList.name = this.data.name
        this.data.propertyList.copyNumber = this.data.copyNumber
        this.data.propertyList.singleNumber = this.data.singleOrdouble
        this.data.propertyList.phoneNumber = this.data.phoneNumber
        this.data.propertyList.formation = this.data.formation
        this.data.propertyList.dormitry = this.data.dormitry
        this.data.propertyList.ExtraInformation = this.data.ExtraInformation
        console.log("requestNumber:"+requestNumber)
        console.log(this.data.propertyList)
        var str ='orderList['+requestNumber+']'
        this.setData({
          [str]:this.data.propertyList
        })
        
        console.log(this.data.orderList)
        console.log(this.data.orderList[requestNumber].name)
        */
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
                //wx.showLoading({
                  //title: '加载中',
                //})

              }
            })
          }
        })
    }else{
      wx.showModal({
        title: '温馨提示',
        content: '你还没有输入信息哦！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
})