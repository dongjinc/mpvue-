<template>
  <view>
    <view style="text-align:center">懒加载</view>
    <view
      :class="['swipe-notice', item.show?'show': 'show-false']"
      :data-set="index"
      v-for="(item, index) in list"
      :key="index"
    >
      <image :src="item.show?item.src: ''" style="width:320rpx;height:320rpx;" />
    </view>
    <button size="mini" @tap="insertData">插数据</button>
  </view>
</template>
<script>
export default {
  name: 'Intersection',
  data () {
    return {
      list: [
        {
          name: '1',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '2',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '3',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '4',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '4',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '5',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '6',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '7',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '8',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '9',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '10',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528562&di=3f991dd7c087fa7911ec46740807961b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F30%2F20120830173938_SyCJn.jpeg'
        }
      ],
      _observer: null
    }
  },
  onReachBottom () {
    // 另外在页面单独设置 css 类， 为了防止影响性能
    this._observer.disconnect()
  },
  mounted () {
    this.intersectionData()
  },
  methods: {
    insertData () {
      for (let i = 0; i < 100; i++) {
        this.list.push({
          name: 'me' + i,
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        })
      }
      this.$nextTick(() => {
        this.intersectionData()
      })
    },
    intersectionData () {
      this._observer = wx.createIntersectionObserver(null, {
        observeAll: true
      })
      this._observer.relativeToViewport().observe('.show-false', res => {
        if (res.intersectionRatio > 0 && !this.list[res.dataset['set']].show) {
          this.list[res.dataset['set']].show = true
        }
        console.log(666)
      })
    }
  }
}
</script>
<style lang="scss">
.swipe-notice {
  margin: 15rpx auto;
  width: 320rpx;
  height: 300rpx;
  background: #eee;
  opacity: 0;
}
.add {
  color: red;
  transition: all linear 1.5s;
}
.show {
  animation: mymove 800ms linear forwards;
}
@keyframes mymove {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>