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
  //获取最新的期刊（初始化数据）
  getLatest(sCallback) {
    this.request({
      url: '/classic/latest',
      success: (res) => {
        sCallback(res);
        // 缓存写入
        console.log(res.index + 'dfdf测试')
        this._setLatestIndex(res.index)
        let key = this._getKey(res.index)
        console.log(key + 'res' + res.index);

        wx.setStorageSync(key, res)
      }
    })
  }
  // 获取前一期刊
  getPrevious(index,sCallback){
    this.request({
      url: '/classic/' + index + '/previous',
      success:(res) => {
        sCallback(res)
      }
    })
  }
  // 获取后一期刊数据
  getNext(index,sCallback){
    this.request({
      url: '/classic/' + index + '/next',
      success:(res)=>{
        sCallback(res)
      }
    })
  }
  // 公共定义上下期刊
  getClassic(index,nextOrPrevious,sCallback){
    // 缓存中寻找or api中写入到缓存中
    // key确定key
    let key = nextOrPrevious == 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)
    console.log(classic +'classic');
    if (!classic){
      this.request({
        url: '/classic/' + index + '/' + nextOrPrevious,
        success: (res) => {
          wx.setStorageSync(this._getKey(res.index), res)
          sCallback(res)
        }
      })
    }else{
      sCallback(classic)
    }
    
  }
  // 判断是否第一个
  isFirst(index){
    return index == 1 ? true : false
  }

  // 判断当前的期刊是否最新的第一期
  isLatest(index){
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
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
  // 私有确定key
  _getKey(index){
    let key = 'classic-' + index
    return key
  }
}


export { ClassicModel }