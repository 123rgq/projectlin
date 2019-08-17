import { HTTP } from '../utils/http.js'
class LikeModel extends HTTP {
  // category类型
  like(behavior, artId, category){
    let url = behavior == 'like' ?'/like':'/like/cancel'
    this.request({
      url:url,
      method:'POST',
      data:{
        art_id:artId,
        type: category
      }
    })
  }

  // 获取点赞数(点赞数是变动的不适合放在缓存中)
  getClassicLikeStatus(artId, category,sCallback){
    this.request({
      url: 'classic/' + category + '/' + artId + '/favor',
      success:sCallback
    })
  }
}
export { LikeModel}