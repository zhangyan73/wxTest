// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel:"",
    code:"",
    disable:true
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
  bindTelInput:function(e){
    this.setData({
      tel: e.detail.value
    })
  },
  /**
   * 获取验证码
   */
  getCode:function(e){
    
    if (!(/^1[34578]\d{9}$/.test(this.data.tel))) {
      wx.showToast({
        icon:"none",
        title: '手机号格式有误!',
      })
      
    } else {
      wx.showToast({
        icon: "none",
        title: '1234',
      })
    }
  },
  bindCodeInput: function (e) {
    this.data.code = e.detail.value;
    
    this.setData({
      disable:false
    })
  },
  formSubmit:function(e){
    console.log("登录成功！")
  }
})