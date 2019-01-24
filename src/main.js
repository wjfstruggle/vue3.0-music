import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../src/assets/reset/reset.css' // 重置样式
import '../src/assets/reset/public.css' // 公共样式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
