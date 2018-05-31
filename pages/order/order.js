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
    noNumberList:[],
    refundList:{},
    refundIndex:0,
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
    try{
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
      var phoneNumber = wx.getStorageSync('phoneNumber')
      var formation = wx.getStorageSync('formation')
      var pageNumber=wx.getStorageSync('pageNumber')
      var ExtraInformation = wx.getStorageSync('ExtraInformation')
      
      if (copyNumber && singleOrdouble && name && phoneNumber && dormitry && formation &&pageNumber) {
        this.data.propertyList.name = name
        this.data.propertyList.copyNumber = copyNumber
        this.data.propertyList.singleOrdouble = singleOrdouble
        this.data.propertyList.phoneNumber = phoneNumber
        this.data.propertyList.formation = formation
        this.data.propertyList.dormitry = dormitry
        this.data.propertyList.ExtraInformation = ExtraInformation
        this.data.propertyList.iconpath = "/images/word.png"
        this.data.propertyList.pageNumber=pageNumber
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
    }catch(err){
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
    var that =this
    wx.showModal({
      title: '提示',
      content: '确定取消订单？',
      success: function (res) {
        if (res.confirm) {
          console.log(event.currentTarget.dataset.id)

          var index = event.currentTarget.dataset.id
          console.log(that.data.orderList[index])
          console.log(typeof that.data.orderList[index].pageNumber)
          console.log(typeof that.data.orderList[index].copyNumber)
          var temporaryObject={}
          var refundIndex=that.data.refundIndex
          temporaryObject.name = that.data.orderList[index].name
          temporaryObject.phoneNumber = that.data.orderList[index].phoneNumber
          temporaryObject.dormitry = that.data.orderList[index].dormitry
          temporaryObject.money = Number(that.data.orderList[index].pageNumber) * Number(that.data.orderList[index].copyNumber) * 0.1
          temporaryObject.formation=that.data.orderList[index].formation
          temporaryObject.copyNumber = that.data.orderList[index].copyNumber
          temporaryObject.singleOrdouble = that.data.orderList[index].singleOrdouble
          console.log(temporaryObject)
          that.data.refundList[refundIndex]=temporaryObject
          
          console.log('List'+that.data.refundList[0].name + " " + that.data.refundIndex)
          wx.setStorageSync('refundList', that.data.refundList)

          that.data.orderList.splice(index, 1)
          console.log(that.data.orderList.length)
          app.globalData.requestNumber = app.globalData.requestNumber - 1
          console.log("requestNumber" + app.globalData.requestNumber)
          that.setData({
            orderList: that.data.orderList,
            refundList:that.data.refundList,
            refundIndex:that.data.refundIndex+1
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