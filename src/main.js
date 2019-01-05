// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

import "../node_modules/jquery/dist/jquery.min.js"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

/*slint-disable-next-line no-unused-vars*/
import $ from 'jquery'

import "../node_modules/jquery-easyui/css/easyui.css"
import "../node_modules/jquery-easyui/js/jquery.easyui.min.js"
import "../node_modules/bootstrap-table/dist/bootstrap-table.min.css"
import "../node_modules/bootstrap-table/dist/bootstrap-table.min.js"

import ElementUi from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)



Vue.config.productionTip = false
Vue.prototype.$http=axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
