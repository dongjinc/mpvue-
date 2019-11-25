<template>
  <view>
    <view>懒加载</view>
    <view
      class="swipe-notice"
      :data-set="index"
      v-for="(item, index) in list"
      :key="index"
    >{{item.name}}-{{item.show}}</view>
    <button size="mini" @tap="insertData">插数据</button>
  </view>
</template>
<script>
export default {
  name: 'Intersection',
  data () {
    return {
      list: [
        { name: '1', show: false },
        { name: '2', show: false },
        { name: '3', show: false },
        { name: '4', show: false },
        { name: '4', show: false },
        { name: '5', show: false },
        { name: '6', show: false },
        { name: '7', show: false },
        { name: '8', show: false },
        { name: '9', show: false },
        { name: '10', show: false }
      ],
      _observer: null
    }
  },
  mounted () {
    this._observer = wx.createIntersectionObserver(null, {
      observeAll: true
    })
    this._observer.relativeToViewport().observe('.swipe-notice', res => {
      if (res.intersectionRatio > 0 && !this.list[res.dataset['set']].show) {
        console.log(this.list[res.dataset['set']].show)
        this.list[res.dataset['set']].show = true
      }
    })
  },
  methods: {
    insertData () {
      for (let i = 0; i < 100; i++) {
        this.list.push({ name: 'me' + i, show: false })
      }
      this.$nextTick(() => {
        const _observer = wx.createIntersectionObserver(null, {
          observeAll: true
        })
        _observer.relativeToViewport().observe('.swipe-notice', res => {
          if (
            res.intersectionRatio > 0 &&
            !this.list[res.dataset['set']].show
          ) {
            this.list[res.dataset['set']].show = true
          }
        })
      })
    }
  }
}
</script>