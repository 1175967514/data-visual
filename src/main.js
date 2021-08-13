import Vue from 'vue'
import App from './App.vue'
import store from "./store/store";
// datav
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

//引入echart
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
Vue.use(ElementUI)


import '@/assets/style/base.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
