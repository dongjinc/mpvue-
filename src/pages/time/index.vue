<template>
  <view>
    <view style="text-align:center">ios版时间处理 需要 replace(/-/g, '/') 将 - 换成 /</view>
    <view style="text-align:center">ios版不支持 2019-12-12</view>
    <view>{{time}}</view>
  </view>
</template>
<script>
export default {
  name: 'time',
  data () {
    return {
      time: null
    }
  },
  mounted () {
    this.time = new Date('2019-12-02 13:52:13'.replace(/-/g, '/')).getTime()
  }
}
</script>