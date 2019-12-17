<template>
  <view style="overflow:hidden">
    <view>商品列表</view>
    <view @tap="openPop">popup</view>
    <!-- 记得加touchstart 否则在滚动时点击会没有效果 -->
    <van-overlay @touchmove.native.stop.prevent :show="show" @touchstart="show = false" />
    <van-transition
      :show="show"
      custom-class="block"
      name
      :duration="durationObj"
      enter-class="van-enter-class"
      enter-active-class="van-enter-active-class"
      leave-active-class="van-leave-active-class"
      leave-to-class="van-leave-to-class"
    >
      <view @touchmove.prevent>
        <view v-for="item in 100" :key="item">{{item}}</view>
      </view>
    </van-transition>
    <view v-for="item in 100" :key="item">1</view>
  </view>
</template>
<script>
export default {
  name: 'popup',
  data () {
    return {
      show: false,
      durationObj: {
        enter: 400,
        leave: 600
      }
    }
  },
  methods: {
    openPop () {
      this.show = true
      console.log(666)
    }
  }
}
</script>
<style lang="scss">
.block {
  position: fixed;
  bottom: 0;
  z-index: 5000;
  width: 100%;
  background: #fff;
  height: 800rpx;
  border-radius: 20px 20px 0 0;
  padding: 5rpx;
  overflow: auto;
}
.van-enter-active-class,
.van-leave-active-class {
  transform: translateY(0rpx);
  transition-property: background-color, transform;
}

.van-enter-class,
.van-leave-to-class {
  // transform: rotate(-360deg) translate3d(-100%, -100%, 0);
  transform: translateY(800rpx);
}
</style>