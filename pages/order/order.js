// pages/order/order.js
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    condition:[],
    total:0,
    propertyList: {},
    orderList:[],
    requestNumber:0,
    noNumberList:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
    
  
  },

  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    this.setData({
      requestNumber : app.globalData.requestNumber
    })
    this.data.noNumberList[this.data.requestNumber]=this.data.requestNumber
    this.setData({
      noNumberList:this.data.noNumberList
    })
    console.log(this.data.noNumberList)
    var singleOrdouble = wx.getStorageSync("singleOrdouble")
    var copyNumber = wx.getStorageSync('copyNumber')
    var name = wx.getStorageSync("name")
    var dormitry = wx.getStorageSync("dormitry")
    var phoneNumber = wx.getStorageInfoSync('phoneNumber')
    var formation = wx.getStorageInfoSync('formation')
    
    var ExtraInformation = wx.getStorageInfoSync('ExtraInformation')
    //console.log(dormitry)
    //console.log(name)
    //console.log(phoneNumber)
    console.log("份数:"+copyNumber)
    console.log("单反:"+singleOrdouble)
    

    if (copyNumber && singleOrdouble && name && phoneNumber && dormitry && formation) {
      this.data.propertyList.name = name
      this.data.propertyList.copyNumber = copyNumber
      this.data.propertyList.singleOrdouble = singleOrdouble
      this.data.propertyList.phoneNumber = phoneNumber
      this.data.propertyList.formation = formation
      this.data.propertyList.dormitry = dormitry
      this.data.propertyList.ExtraInformation = ExtraInformation
      this.data.propertyList.iconpath = "/images/word.png"

      console.log("requestNumber:" + this.data.requestNumber)
      var requestNumber = this.data.requestNumber
      console.log(this.data.propertyList)

      var str = 'orderList[' + requestNumber + ']'
      this.setData({
        [str]: this.data.propertyList
      })

      console.log(this.data.orderList)
      this.data.condition[requestNumber]=true
      this.setData({
        condition: this.data.condition,
        orderList: this.data.orderList
      })

    } else {
      wx.showToast({
        title: '你还没有下单哦',
        icon: 'none',
        duration: 1000
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function (event) {
    
     
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  cancelOrder: function (event) {
    wx.showModal({
      title: '提示',
      content: '确定取消订单？',
      success: function (res) {
        if (res.confirm) {
          console.log(event.currentTarget.dataset.id)

          var index = event.currentTarget.dataset.id
          this.data.orderList.splice(index, 1)
          console.log(this.data.orderList.length)
          app.globalData.requestNumber = app.globalData.requestNumber - 1
          console.log("request" + app.globalData.requestNumber)
          /*
          for(index; index<this.data.orderList.length; index++){
            this.data.orderList[index]=this.data.orderList[index+1]
          }*/
          this.setData({
            orderList: this.data.orderList,

          })
        } else if (res.cancel) {
          wx.showToast({
            title: '已取消',
            icon: 'success',
            duration: 1000
          })
        }
      }
    })

    
    
  
  },
  allOrders:function(event){

    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  refundSituation: function () {
    wx.navigateTo({
      url: '/pages/refund/refund',
    })
  }
})