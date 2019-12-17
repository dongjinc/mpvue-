<template>
  <view>
    <view style="text-align:center;">
      <view style="font-size: 26rpx">分享按钮(转发给其他人)</view>
      <button size="mini" open-type="share">分享商品</button>
    </view>
    <view style="text-align:center;margin-top: 50rpx">
      <view style="font-size: 26rpx">分享按钮(朋友圈)</view>
      <button size="mini" @tap="drawStart">分享商品</button>
    </view>
    <van-overlay :show="show" @touchstart="drawClear" />
    <van-transition :show="show" custom-class="block" name="fade-right">
      <view
        style="width: 80%;background:#fff;margin:0 auto;border-radius:25px;overflow:hidden"
        @touchmove.prevent
      >
        <canvas style="height: 500px;" canvas-id="firstCanvas" @error="canvasIdErrorCallback"></canvas>
      </view>
    </van-transition>
  </view>
</template>
<script>
export default {
  name: 'Share',
  data () {
    return {
      show: false,
      durationObj: {
        enter: 400,
        leave: 600
      }
    }
  },
  // 分享商品回调
  onShareAppMessage (res) {
    // return eventHandler接收到的分享参数
    // https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object
    return {
      title: '自定义转发标题',
      path: '/pages/index/main?id=1111',
      imageUrl:
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2733421236,1044083782&fm=26&gp=0.jpg'
    }
  },
  onReady () {},
  methods: {
    canvas () {
      this.show = true
      console.log(1)
    },
    drawStart () {
      wx.showLoading({
        title: '绘图中...'
      })
      setTimeout(() => {
        wx.hideLoading()
        console.log(666)
        this.drawShare()
      }, 1500)
    },
    drawShare () {
      var context = wx.createCanvasContext('firstCanvas')
      // context.setStrokeStyle('#00ff00')
      // context.setLineWidth(5)
      // context.rect(0, 0, 200, 200)
      // context.stroke()
      // context.setStrokeStyle('#ff0000')
      // context.setLineWidth(2)
      // context.moveTo(160, 100)
      // context.arc(100, 100, 60, 0, 2 * Math.PI, true)
      // context.moveTo(140, 100)
      // context.arc(100, 100, 40, 0, Math.PI, false)
      // context.moveTo(85, 80)
      // context.arc(80, 80, 5, 0, 2 * Math.PI, true)
      // context.moveTo(125, 80)
      // context.arc(120, 80, 5, 0, 2 * Math.PI, true)
      // context.stroke()
      context.drawImage('/static/images/bg-share.jpg', 0, 0, 300, 500)
      context.drawImage('/static/images/user.png', 210, 210, 70, 70)
      context.draw()
      this.show = true
    },
    drawClear () {
      this.show = false
      var context = wx.createCanvasContext('firstCanvas')
      context.clearRect(0, 0, 300, 500)
      setTimeout(() => {
        context.draw()
      }, 180)
    }
  }
}
</script>
<style lang="scss">
.block {
  position: fixed;
  top: 60px;
  z-index: 5000;
  width: 100%;
  padding: 5rpx;
}
.van-enter-active-class,
.van-leave-active-class {
  transition-property: background-color, transform, opacity;
}

.van-enter-class,
.van-leave-to-class {
  // transform: rotate(-360deg) translate3d(-100%, -100%, 0);
  opacity: 1;
  // transform: translateY(800rpx);
}
</style>