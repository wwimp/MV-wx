// pages/index/index.js
const fetch = require('../../utils/fetch.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides: [],
    grids: [{
      "id": "1",
      "icon": "/assets/icons/grid-01.png",
      "name": "美食"
    }, {
      "id": "2",
      "icon": "/assets/icons/grid-02.png",
      "name": "洗浴"
    }, {
      "id": "3",
      "icon": "/assets/icons/grid-03.png",
      "name": "婚政"
    }, {
      "id": "4",
      "icon": "/assets/icons/grid-04.png",
      "name": "KTV"
    }, {
      "id": "5",
      "icon": "/assets/icons/grid-05.png",
      "name": "工作"
    }, {
      "id": "6",
      "icon": "/assets/icons/grid-06.png",
      "name": "培训"
    }, {
      "id": "7",
      "icon": "/assets/icons/grid-07.png",
      "name": "汽车"
    }, {
      "id": "8",
      "icon": "/assets/icons/grid-08.png",
      "name": "租房"
    }, {
      "id": "9",
      "icon": "/assets/icons/grid-09.png",
      "name": "装修"
    }]
  },
  clickHandle() {
    wx.showToast({
      title: '这是凑数的，老铁',
      icon: 'none'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      // 这里的地址没有跨域的概念
      // 1. 发送异步请求不再是 WEB 开发的那套 AJAX
      // 2. 没有跨域
      // 3. 请求的地址必须在管理后台添加白名单
      // 4. 域名必须备案，服务端必须采用 HTTPS
      // apikey=0b2bdeda43b5688921839c8ecb20399b
      // apikey=0df993c66c0c636e29ecbb5344252a4a
      url: 'https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b',
      // url: 'https://locally.uieee.com/slides',
      header: {
        'Content-Type': 'json'
      },
      success: res => {
        // console.log(res.data.subjects)
        var list = res.data.subjects
        var list1 = []
        // console.log(list)
        for (let index = 0; index < list.length; index++) {
          const element = list[index];
          list1.push(element.images.large)
        }
        // console.log(list1)
        this.setData({
          slides: list1
        })
        // console.log(this.data.slides)
      },
      fail: res => {
        console.log(res)
      }
    })
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b',
      header: {
        'Content-Type': 'json'
      },
      success: res => {
        var list = res.data.subjects
        var list2 = []
        for (let index = 0; index < list.length; index++) {
          const element = list[index];
          list2.push(element.images.large)
        }
        this.setData({
          slides: list2
        })
      },
      fail: res => {
        console.log(res)
      }
    })
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

  }
})