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
  getPrevious(sCallback,index){
    this.request({
      url:'classic/' + index + '/previous',
      success:(res) => {
        sCallback(res)
      }
    })
  }
}


export { ClassicModel }