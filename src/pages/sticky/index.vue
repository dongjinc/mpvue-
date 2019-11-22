<template>
  <view class="van-stick" style="height: 900px;">
    <van-sticky offset-top="30" style="width:100%!important">
      <sort></sort>
    </van-sticky>
  </view>
</template>
<script>
import sort from '@/components/sort.vue'
export default {
  name: 'Sticky',
  components: { sort },
  data () {
    return {}
  }
}
</script>
<style>
.van-sticky-wrap {
  width: 100%;
}
</style>