import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/scss/main.scss'
import router from './router'
import store from './store'

//Plugins
import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
