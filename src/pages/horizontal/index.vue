<template>
  <view>
    <view style="text-align:center">横向滚动商品</view>
    <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
      <view class="row-item" v-for="item in 12" :key="item">
        <image
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576578055138&di=eb561d204c6d48d48714b902735c483d&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F1215%2Fac4ab4f15bf5d3c3dcc07feb64a49a81.jpg"
        />
      </view>
    </scroll-view>
  </view>
</template>
<script>
export default {
  name: 'horizontal',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss">
.scroll-view_H {
  display: flex;
  white-space: nowrap;
  .row-item {
    display: inline-block;
    image {
      width: 220rpx;
      height: 150rpx;
    }
  }
}
</style>