// pages/linproject/index.js
// import {HTTP} from '../../utils/http.js'
import { ClassicModel } from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'

let classicModel = new ClassicModel()
let likeModel = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null,
  //  期刊默认值
    first: false,
    latest: true,

  },
  // 事件
  onLike: function (event){
    console.log(event);
    let behavior = event.detail.behavior
    console.log(behavior + ' behavior' + event);
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },
  // 首页音乐切换
  onLike:function(event){},
  onPrevious:function(event){
    // let index = this.data.classic.index
    // classicModel.getPrevious(index,(res)=>{
    //   console.log(res.index + 'res.index');
    //   console.log(classicModel.isFirst(res.index) + 'classicModel.isFirst(res.index)' + classicModel.isLatest(res.index));
    //   console.log(res + 'resprevi')
    //   this.setData({
    //     classic:res,
    //     latest: classicModel.isLatest(res.index),
    //     first: classicModel.isFirst(res.index),
    //   })
    // });
    this._updateClassic('previous');
  },
  // 左点击
  onNext:function(event){
    // let index = this.data.classic.index
    // classicModel.getNext(index, (res) => {
    //   console.log(classicModel.isLatest(res.index) + 'classicModel.isLatest(res.index)' + classicModel.isLatest(res.index));
    //   console.log(res + 'res');
    //   this.setData({
    //     classic: res,
    //     latest: classicModel.isLatest(res.index),
    //     first: classicModel.isFirst(res.index)
    //   })
    // });
    this._updateClassic('next');
  },
  // 私有函数
  // _updateClassic:function(nextOrPrevious){
  //   let index = this.data.classic.index
  //   classicModel.getClassic(index, nextOrPrevious, (res) => {
  //     this.setData({
  //       classic: res,
  //       latest: classicModel.isLatest(res.index),
  //       first: classicModel.isFirst(res.index)
  //     })
  //   });
  // },
  _updateClassic:function(nextOrPrevious){
    let index = this.data.classic.index
    classicModel.getClassic(index,nextOrPrevious,(res)=>{
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // http.request({
    //   url: 'classic/latest',
    //   success:(res) =>{
    //     console.log(res);
    //   }
    // });
    classicModel.getLatest((res)=>{
      // 数据更新
      this.setData({
        classic:res
      });
      // lastestClassic
    });
    // classic.getLatest((res) => {
    //   //this._getLikeStatus(res.id,res.type);
    //   console.log(res);
    //   //this.setData的原理是先定义一个classic把res赋值给classic,然后把classic给data；
    //   // this.setData({
    //   //   classic: res,
    //   //   likeCount: res.fav_nums,
    //   //   likeStatus: res.like_status
    //   // })
    // })
    // wx.request({
    //   url: 'http://bl.7yue.pro/v1/classic/latest',
    //   header:{
    //     appkey:'RdshydjBvcYZhMZC'
    //   },
    //   success:(res)=>{
    //     console.log(this.data.test);
    //   }

    // });
    // 期刊的最后和最前
    //  lastestClassic currentClassic currentIndex 数据缓存
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