import Vue from 'vue'
import App from './App'
import '../static/color-ui/main.css'
import '../static/color-ui/icon.css'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
Vue.prototype.globalData = getApp().globalData
Vue.prototype.$_eventBus = app
