import {HTTP} from '../utils/http.js'
// 模块化
class ClassicModel extends HTTP {
  // 获取最新期刊
  // getLatest(sCallback){
  //   this.request({
  //     url: '/classic/latest',
  //     success: (res) => {
  //       console.log(res);
  //       sCallback(res);
  //     }
  //   });
  // }
  //获取最新的期刊
  getLatest(sCallback) {
    this.request({
      url: '/classic/latest',
      success: (res) => {
        sCallback(res);
   
      }
    })
  }
  // 获取前一期刊
  getPrevious(index,sCallback){
    this.request({
      url: '/classic/' + index + '/previous',
      success:(res) => {
        sCallback(res)
        // 缓存写入
        this._setLatestIndex(res.index);
      }
    })
  }
  
  // 当前期刊第一
  isFirst(index){
    console.log(index + 'index');
    return index == 1 ? true : false
  }

  // 最后一个期刊判断
  isLatest(index){
    let latestIndex = this._getLatestIndex()
    return latestIndex = 8 ? true:false
  }
  // 期刊的最后和最前判断缓存机制
  _setLatestIndex(index){
    // 同步小数据
    wx.setStorageSync('latest', index)
    // wx.setStorage异步

  }
  _getLatestIndex(){
    let index = wx.getStorageSync('latest')
    return index
  }
}


export { ClassicModel }