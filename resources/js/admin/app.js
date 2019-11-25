import Vue from 'vue'

import Dashboard from "./views/Dashboard";

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Dashboard },
  { path: '/products', component: ProductIndex },
  { path: '/product/create', component: ProductCreate },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

import VueRouter from 'vue-router'

Vue.use(VueRouter)


// window.KTUtil = require('./assets/js/global/components/base/util')

// import "./assets/js/global/components/base/util"
// import "./assets/js/global/components/base/header"
// import "./assets/js/global/components/base/menu"

import Layout from './views/Layout'
import ProductIndex from "./views/product/Index";
import ProductCreate from "./views/product/Create";
// import "./assets/js/global/components/base/wizard"
// import "./assets/js/global/components/base/scrolltop"
// import "./assets/js/global/components/base/offcanvas"
// import "./assets/js/global/components/base/dialog"
// import "./assets/js/global/components/base/portlet"
// import "./assets/js/global/components/base/avatar"
// import "./assets/js/global/components/base/app"



new Vue({
  el: '#app',
  router,
  components: {
    Layout
  }
  // render: h => h(App),
})





