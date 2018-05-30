// pages/order/order.js
const app=getApp();
var singleOrdouble = wx.getStorageSync("singleOrdouble")
var copyNumber = wx.getStorageSync('copyNumber')
var name = wx.getStorageSync("name")
var dormitry = wx.getStorageSync("dormitry")
var phoneNumber = wx.getStorageInfoSync('phoneNumber')
var formation = wx.getStorageInfoSync('formation')

var orderList = wx.getStorageInfoSync('orderList')
var ExtraInformation = wx.getStorageInfoSync('EXtraInformation')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    condition:false,
    total:0,
    propertyList: {},
    orderList:{},
    informationArray:[
      { 
        iconpath:"/images/word.png",
        singleOrdouble:"",
        copyNumber: "",
      
      },
     
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    console.log(dormitry)
    console.log(name)
    console.log(phoneNumber)
    console.log(copyNumber)
    console.log(singleOrdouble)
    console.log(formation)

    if (copyNumber && singleOrdouble && name && phoneNumber && dormitry && formation) {
      this.data.propertyList.name = name
      this.data.propertyList.copyNumber = copyNumber
      this.data.propertyList.singleNumber = singleOrdouble
      this.data.propertyList.phoneNumber = phoneNumber
      this.data.propertyList.formation = formation
      this.data.propertyList.dormitry = dormitry
      this.data.propertyList.ExtraInformation = ExtraInformation
      var requestNumber = wx.getStorageInfoSync('requestNumber')
      console.log(requestNumber.toString())

      console.log("requestNumber:" + requestNumber)

      console.log(this.data.propertyList)
      
      var str = 'orderList[' +requestNumber + ']'
      this.setData({
        [str]: this.data.propertyList
      })

      console.log(this.data.orderList)
      console.log(this.data.orderList[requestNumber].name)



      this.data.informationArray[0].singleOrdouble = singleOrdouble
      this.data.informationArray[0].copyNumber = copyNumber
      this.setData({
        informationArray: this.data.informationArray,
        condition: true

      })
    } else {
      wx.showToast({
        title: '你还没有下单哦',
        icon: 'none',
        duration: 1000
      })
    }
  },

  allOrders:function(){
    
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
  onPullDownRefresh: function () {
  
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
  allOrders:function(){
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