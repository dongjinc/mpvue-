<template>
  <div style="font-size: 24rpx">
    <view>
      <view style="text-align:center">接口请求</view>
      <van-button size="small" @click="postHandle">postHandle</van-button>
    </view>
    <van-button size="small" @click="clickHandle">this is vant components</van-button>
    <view>
      <view style="text-align:center">组件</view>
      <van-button size="small" @click="moveToSort">商品筛选</van-button>
      <van-button size="small" @click="moveToShare">商品分享</van-button>
      <van-button size="small" @click="moveToLazy">商品懒加载</van-button>
    </view>
  </div>
</template>

<script>
import { get, serialize } from '../../utils/http'
import card from '@/components/card'

export default {
  data () {
    return {}
  },
  components: {
    card
  },
  onLoad (query) {
    console.log(query)
  },
  methods: {
    moveToVuex () {
      const url = '/pages/counter/main' + serialize({ name: 11, age: 21 })
      wx.navigateTo({ url })
    },
    moveToSort () {
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
