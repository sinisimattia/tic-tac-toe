import Vue from 'vue'
import App from '@/App.vue'
import "@/assets/scss/app.scss"
import router from '@/router'
import store from '@/store'
import Swal from 'vue-sweetalert2';

Vue.config.productionTip = false

Vue.use(Swal, {
  buttonsStyling: false,
  customClass: {
    container: 'container-class',
    popup: 'notification is-rounded has-shadow',
    header: 'header-class',
    title: 'title is-1',
    content: 'subtitle is-4',
    confirmButton: 'button is-medium is-dark is-rounded',
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
