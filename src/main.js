/*
 * @Author: 王伟斌
 * @Date: 2022-01-15 22:22:43
 * @LastEditors: 王伟斌
 * @LastEditTime: 2022-01-15 22:26:52
 * @FilePath: \20220115\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
