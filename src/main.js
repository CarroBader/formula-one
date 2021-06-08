import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueAxios from 'vue-axios'

/* Icons */
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faTable } from '@fortawesome/free-solid-svg-icons/faTable'
import { faScrewdriver } from '@fortawesome/free-solid-svg-icons/faScrewdriver'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons/faGlobeEurope'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)

library.add(faHome, faTable, faScrewdriver, faGlobeEurope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
