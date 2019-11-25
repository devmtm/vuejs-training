import Vue from 'vue'
import Layout from './views/Layout.vue'
// import App from './App.vue'

Vue.config.productionTip = false

import './assets/plugins/jquery-1.12.4.min.js'
// import './assets/plugins/bootstrap4/js/bootstrap.min.js'
import './assets/plugins/owl-carousel/owl.carousel.min.js'
// import './assets/plugins/imagesloaded.pkgd.js'
// import './assets/plugins/masonry.pkgd.min.js'
// import './assets/plugins/isotope.pkgd.min.js'
import './assets/plugins/jquery.matchHeight-min.js'
import './assets/plugins/slick/slick/slick.min.js'
import './assets/plugins/jquery-bar-rating/dist/jquery.barrating.min.js'
import './assets/plugins/slick-animation.min.js'
// import './assets/plugins/lightGallery-master/dist/js/lightgallery-all.min.js'
import './assets/plugins/jquery-ui/jquery-ui.min.js'
// import './assets/plugins/sticky-sidebar/dist/sticky-sidebar.min.js'
// import './assets/plugins/YTPlayer/dist/jquery.mb.YTPlayer.min.js'
import './assets/plugins/jquery.slimscroll.min.js'
import './assets/plugins/select2/dist/js/select2.full.min.js'
// import './assets/plugins/gmap3.min.js'

new Vue({
  el: "#app",
  components: {
    Layout
  },
  // render: h => h(Layout),
})
    // .$mount('#app')
