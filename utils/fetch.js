module.exports = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      // url: 'https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b',
      // url: 'https://api.douban.com/v2/${url}?apikey=0b2bdeda43b5688921839c8ecb20399b',
      url: `https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b`,
      success: resolve,
      fail: reject
    })
  })
}