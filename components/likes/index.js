// 组件components/likes/index.js
Component({
  // 组件属性列表
  // 内部和外部访问
  properties:{
    like:{
      type:Boolean,
      // value:false,

    },
    count:{
      type:Number
    }
  },
  /*
    *组件的初始数据
  */
  // 私有外部不能访问
  data:{
    // 组件内容数据
    // 数据绑定
    // like:false,
    // count1:9,
    // count2:999,
    yesSrc: 'images/like.png',
    noSrc:'images/unlike.png',
  },
  /*
    组件的方法列表
  */
  methods:{
    onLike:function(event){
      // 自定义事件
      let like = this.properties.like
      let count = this.properties.count
      count = like?count-1:count+1
      this.setData({
        count:count,
        like:!like
      });
      console.log(event);
      //激活
      // 组件间通信
      // triggerEvent (触发事件bubbles事件是否冒泡，composed事件是否穿越组件边界capturePhase事件捕获阶段)
      let behavior = this.properties.like?'like':'cancel'
      // 激活
      this.triggerEvent('like',{
        behavior: behavior
      },{})
    }
  }
});