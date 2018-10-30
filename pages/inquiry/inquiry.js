// pages/inquiry/inquiry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '../../images/banner_1.png',
      '../../images/banner_2.png',
      '../../images/banner_3.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicator_active_color:"#FFFFFF",
    billType: [
      "银票", 
      "商票"
    ],
    billMedia: [
      "电票", 
      "纸票"
    ],
    billBank:[
      "国股",
      "城商",
      "外贸",
      "农商",
      "农信",
      "农合",
      "村镇",
      "财务"
    ],
    billMediaSelected:0,
    billTypeSelected:0,
    billBankSelected:0,
    dueDate:"请选择票据到期日",
    money:0,
    picPath:""
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
  billType: function(e){
    this.setData({
      billTypeSelected: e.target.id
    })
  },
  selectMedia: function (e) {
    this.setData({
      billMediaSelected: e.target.id
    })
  },
  billBank: function (e) {
    this.setData({
      billBankSelected: e.target.id
    })
  },
  bindMoneyInput:function(e){
    this.setData({
      money:e.detail.value
    })
  },
  bindDateChange:function(e){
    // 选择票据到期日
    this.setData({
      dueDate: e.detail.value
    })
  },
  addPic:function(e){
    // 上传票面照片
    var tmp = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        tmp.setData({
          picPath: res.tempFiles[0].path
        })
      }
    })
  },
  deletePic:function(e){
    this.setData({
      picPath:""
    })
  },
  inquiry:function(e){
    
    // 立即询价
    console.log("票据类型：" + this.data.billTypeSelected);
    console.log("票据介质：" + this.data.billMediaSelected);
    console.log("承兑行：" + this.data.billBankSelected);
    console.log("票据金额：" + this.data.money);
    console.log("票面照片：" + this.data.picPath);
  }
})