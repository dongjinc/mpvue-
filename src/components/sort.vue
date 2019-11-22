<template>
  <view style="display:flex;justify-content:space-between;font-size:26rpx;padding: 20rpx 30rpx">
    <view @tap="onActive('综合')" :class="[activeItem === '综合' ? 'activeClass' : 'notActive']">综合</view>
    <view
      @tap="onActive('销量')"
      :class="[activeItem === '销量' ? 'activeClass' : 'notActive']"
      style="position:relative;"
    >
      销量
      <view style="position: absolute;right:-26rpx;top:0 ">
        <i
          :class="[
            activeItem === '销量' && saleNum === 1
              ? 'activeClass'
              : 'notActiveItem',
            'iconfont',
            'iconx'
          ]"
          style="color:#eee;font-size:18rpx;"
        ></i>
        <i
          style="color:#eee;font-size:18rpx"
          :class="[
            activeItem === '销量' && saleNum === 2
              ? 'activeClass'
              : 'notActiveItem',
            'iconfont',
            'iconx'
          ]"
        ></i>
      </view>
    </view>
    <view
      @tap="onActive('价格')"
      :class="[activeItem === '价格' ? 'activeClass' : 'notActive']"
      style="position:relative;"
    >
      价格
      <view style="position: absolute;right:-26rpx;top:0 ">
        <i
          :class="[
            activeItem === '价格' && saleNum === 1
              ? 'activeClass'
              : 'notActiveItem',
            'iconfont',
            'iconx'
          ]"
          style="color:#eee;font-size:18rpx;"
        ></i>
        <i
          style="color:#eee;font-size:18rpx"
          :class="[
            activeItem === '价格' && saleNum === 2
              ? 'activeClass'
              : 'notActiveItem',
            'iconfont',
            'iconx'
          ]"
        ></i>
      </view>
    </view>
    <view>筛选</view>
    <van-popup
      :show="sumPopup"
      position="top"
      @close="onClose"
      custom-style="height: 40%;width: 80%;border-radius:15rpx;overflow-y: visible;z-index:100000"
    ></van-popup>
  </view>
</template>
<script>
export default {
  name: 'sort',
  data () {
    return {
      listItem: [''],
      activeItem: '',
      saleNum: 0,
      sumPopup: false
    }
  },
  methods: {
    onActive (name) {
      this.saleNum++
      if (this.saleNum === 3) {
        this.saleNum = 1
      }
      if (name === '综合') this.sumPopup = true
      if (this.activeItem !== name && this.activeItem) this.saleNum = 1
      this.activeItem = name
      this.saleNum % 2 ? console.log('升序') : console.log('降序')
    },
    onClose () {
      this.sumPopup = false
    }
  }
}
</script>
<style lang="scss">
.activeClass {
  color: #ff6a6a !important;
}
.notActive {
  color: #000;
}
.notActiveItem {
  color: #eee !important;
}
</style>