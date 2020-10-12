import Vue from 'vue'
import App from '@/App.vue'
import "@/assets/scss/app.scss"
import router from '@/router'
import store from '@/store'
import Swal from 'vue-sweetalert2';

Vue.config.productionTip = false

Vue.use(Swal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
