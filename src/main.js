import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/sass/reset.scss' // 重置样式
import '@/sass/public.scss' // 公共样式



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
