import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Mint from 'mint-ui'; // 图片懒加载
import '@/sass/reset.scss'; // 重置样式
import '@/sass/public.scss'; // 公共样式
import 'mint-ui/lib/style.css';



Vue.config.productionTip = false;
Vue.use(Mint)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
