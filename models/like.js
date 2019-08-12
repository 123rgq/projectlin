import { HTTP } from '../utils/http.js'
class LikeModel extends HTTP {
  // category类型
  like(behavior, artId, category){
    let url = behavior == 'like' ?'/like':'/like/cancel'
    this.request({
      url:url,
      method:'POST',
      data:{
        arc_id:artId,
        type: category
      }
    })
  }
}
export { LikeModel}