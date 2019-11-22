<template>
  <view>
    <view>分享按钮</view>
    <button open-type="share" style="margin-top:50px">分享商品</button>
  </view>
</template>
<script>
export default {
  name: 'Share',
  // 分享商品回调
  onShareAppMessage (res) {
    // return eventHandler接收到的分享参数
    return {
      title: '自定义转发标题',
      path: '/pages/index/main?id=1111',
      imageUrl:
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2733421236,1044083782&fm=26&gp=0.jpg'
    }
  }
}
</script>