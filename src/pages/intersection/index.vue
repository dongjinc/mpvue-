<template>
  <scroll-view scroll-y="true" :style="{height: scrollHeight}" @scroll="getScroll">
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
  </scroll-view>
</template>
<script>
import store from '../counter/store'
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
        },
        {
          name: '11',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '12',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '13',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '14',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '15',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '16',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '17',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '18',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '19',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '20',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        },
        {
          name: '21',
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528562&di=3f991dd7c087fa7911ec46740807961b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F30%2F20120830173938_SyCJn.jpeg'
        }
      ],
      _observer: null,
      scrolling: false,
      scrollHeight: store.state.count.windowHeight + 'px'
    }
  },
  onReachBottom () {
    // 另外在页面单独设置 css 类， 为了防止影响性能
    this._observer.disconnect()
  },
  mounted () {
    this.scrollHeight = store.state.count.windowHeight + 48 + 'px'
    this.intersectionData()
  },
  methods: {
    insertData () {
      for (let i = 0; i < 20; i++) {
        this.list.push({
          name: 'me' + i,
          show: false,
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574745528459&di=cb2c88ef7f12e589491521f9f34c28d7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F07%2F20140707163445_3WZjj.jpeg'
        })
      }
      this.$nextTick(() => {
        this.scrolling = false
        this.intersectionData()
      })
    },
    /** 懒加载 */
    intersectionData () {
      this._observer = wx.createIntersectionObserver(null, {
        observeAll: true
      })
      this._observer.relativeToViewport().observe('.show-false', res => {
        if (res.intersectionRatio > 0 && !this.list[res.dataset['set']].show) {
          this.list[res.dataset['set']].show = true
        }
      })
    },
    /** 通过 内容高度和滑动指定位置进行相减  */
    getScroll (e) {
      if (e.mp.detail.scrollHeight - e.mp.detail.scrollTop < 3200) {
        this.more()
      }
    },
    more () {
      /** scrolltolower 事件会导致多次触发 */
      if (this.scrolling) return false
      wx.getSystemInfo({
        success: res => {
          console.log(res)
        }
      })
      this.scrolling = true
      if (this.list.length >= 248) return false
      /** 请求接口 */
      setTimeout(() => {
        this.insertData()
        console.log('请求一次!')
      }, 600)
      console.log(555)
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