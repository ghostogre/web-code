// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import config from './vuex'
import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
