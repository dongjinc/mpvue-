<template>
  <view :style="{marginTop: Obj.statusBarHeight + 'px'}">
    <view class="cu-bar bg-white solid-bottom">
      <view class="action">
        <text class="cuIcon-titles text-orange"></text>案例类卡片
      </view>
      <view class="action">
        <switch class="sm"></switch>
      </view>
    </view>
    <view class="grid col-5 padding-sm">
      <view class="margin-tb-sm text-center">
        <button class="cu-btn round bg-red shadow" style="font-size:28rpx;padding:15rpx;">嫣红</button>
      </view>
    </view>
  </view>
</template>
<script>
import store from '../counter/store'
export default {
  name: 'color',
  data () {
    return {
      // https://blog.csdn.net/qq_31763107/article/details/88652741
      Obj: store.state.count
    }
  },
  onLoad () {
    this.globalData.a = 1
    console.log(1)
  }
}
</script>