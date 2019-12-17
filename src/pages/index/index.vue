<template>
  <div style="font-size: 24rpx">
    <view :style="{marginTop: globalData.statusBarHeight + 'px'}">
      <view style="text-align:center;">接口请求</view>
      <van-button size="small" @click="postHandle">postHandle</van-button>
    </view>
    <van-button size="small" @click="clickHandle">this is vant components</van-button>
    <view>
      <view style="text-align:center;margin-bottom:15rpx">组件</view>
      <van-button size="small" @click="moveToSort">商品筛选</van-button>
      <van-button size="small" @click="moveToShare">商品分享</van-button>
      <van-button size="small" @click="moveToLazy">商品懒加载</van-button>
      <van-button size="small" @click="moveToPop">弹出窗口</van-button>
      <van-button size="small" @click="moveToHorizontal">横向滚动</van-button>

      <van-button size="small" @click="moveToColor">Color-Ui</van-button>
    </view>
    <view>
      <view style="text-align:center;margin-bottom:15rpx">坑</view>
      <van-button size="small" @click="moveToTime">时间计算问题</van-button>
    </view>
  </div>
</template>

<script>
import { get, serialize } from '../../utils/http'
import card from '@/components/card'
import store from '../counter/store'
export default {
  data () {
    return {
      globalData: store.state.count
    }
  },
  components: {
    card
  },
  onLanch () {},
  onshow (query) {
    wx.getSystemInfo({
      success: res => {
        console.log(res)
        this.globalData = res
      }
    })
    console.log(new Date('2019-12-02 13:52:13'.replace(/-/g, '/')).getTime())
  },
  onShow () {
    this.$_eventBus.$on('onmessage', res => {
      console.log(res)
    })
  },
  methods: {
    moveToVuex () {
      const url = '/pages/counter/main' + serialize({ name: 11, age: 21 })
      wx.navigateTo({ url })
    },
    moveToSort () {
      /** eventbus */
      this.$_eventBus.$emit('onmessage', 555)
      const url = '/pages/sticky/main'
      wx.navigateTo({ url })
    },
    moveToShare () {
      const url = '/pages/share/main'
      wx.navigateTo({ url })
    },
    moveToLazy () {
      const url = '/pages/intersection/main'
      wx.navigateTo({ url })
    },
    moveToTime () {
      const url = '/pages/time/main'
      wx.navigateTo({ url })
    },
    moveToColor () {
      const url = '/pages/color/main'
      wx.navigateTo({ url })
    },
    moveToPop () {
      const url = '/pages/popup/main'
      wx.navigateTo({ url })
    },
    moveToHorizontal () {
      const url = '/pages/horizontal/main'
      wx.navigateTo({ url })
    },
    bindViewTap () {
      const url = '../logs/main?name=22'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    async postHandle (ev) {
      try {
        const result = await get('localhost')
        console.log('clickHandle:', result)
      } catch (err) {
        console.log(err)
      }
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang="scss">
page {
  font-size: 24rpx;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: '';
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
