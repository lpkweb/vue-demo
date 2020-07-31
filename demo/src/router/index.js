import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const dayChart = () => import('../pages/day-chart/dayChart.vue');
const weekChart = () => import('../pages/week-chart/weekChart.vue');
const monthChart = () => import('../pages/month-chart/monthChart.vue');
const addText = () => import('../pages/add-text/add-text.vue');

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/day',
    },
    {
      path: '/day',
      component: dayChart,
    },
    {
      path: '/week',
      component: weekChart,
    },
    {
      path: '/month',
      component: monthChart,
    },
    {
      path: '/add-text',
      component: addText,
    }
  ]
});