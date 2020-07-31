import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import vueHashCalendar from 'vue-hash-calendar'
import 'vue-hash-calendar/lib/vue-hash-calendar.css'

Vue.config.productionTip = false

Vue.use(vueHashCalendar);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
