import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element'
//导入全局样式
import './assets/css/global.css'
import axios from 'axios'
//https://www.liulongbin.top:8888/api/private/v1/
//配置请求的根路径
axios.defaults.baseURL='https://www.liulongbin.top:8888/api/private/v1/'
Vue.prototype.$http=axios
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render:w=>w(App),
   
})
