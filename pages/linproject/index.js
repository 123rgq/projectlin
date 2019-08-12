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
    imgs: [
      { url: 'http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201801/jiaoben5647/img/5.jpg' },
      { url: 'http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201801/jiaoben5647/img/1.jpg' },
      { url: 'http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201801/jiaoben5647/img/2.jpg' }
    ],

  },
  // 事件
  onLike: function (event){
    console.log(event);
    let behavior = event.detail.behavior
    console.log(behavior + ' behavior' + event);
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
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
      console.log(res);
      // 数据更新
      this.setData({
        classic:res
      });
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