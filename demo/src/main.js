import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import { Calendar, Cell, ActionSheet } from 'vant';
import 'vant/lib/index.less';

Vue.config.productionTip = false

Vue.use(Calendar);
Vue.use(Cell);
Vue.use(ActionSheet);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
