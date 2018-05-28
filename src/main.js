// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import '@/assets/js/media.js'
import '@/assets/js/jquery-2.1.4.js'
import '@/assets/js/jquery-weui.min.js'
import '@/assets/css/project.css'
import '@/assets/css/jquery-weui.min.css'
import '@/assets/css/project.css'
import '@/assets/css/weui.min.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
