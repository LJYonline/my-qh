import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export const routes = [{
    component: () => import('@/views/hello/index.vue'),
    name: 'hello',
    path: '/hello',
  },
  {
    component: () => import('@/views/home/index.vue'),
    name: 'home',
    path: '/home',
  },
  {
    component: () => import('@/views/homeAbout/index.vue'),
    name: 'homeAbout',
    path: '/homeAbout',
  },
  {
    component: () => import('@/views/homeAccountGuide/index.vue'),
    name: 'homeAccountGuide',
    path: '/homeAccountGuide',
  },
  {
    component: () => import('@/views/homeCashGuide/index.vue'),
    name: 'homeCashGuide',
    path: '/homeCashGuide',
  },
  {
    component: () => import('@/views/homeCommonProblem/index.vue'),
    name: 'homeCommonProblem',
    path: '/homeCommonProblem',
  },
  {
    component: () => import('@/views/homeExchangeAbout/index.vue'),
    name: 'homeExchangeAbout',
    path: '/homeExchangeAbout',
  },
  {
    component: () => import('@/views/homeVarietyRules/index.vue'),
    name: 'homeVarietyRules',
    path: '/homeVarietyRules',
  },
  {
    component: () => import('@/views/svgIcons/index.vue'),
    name: 'svgIcons',
    path: '/svgIcons',
  },
  {
    path: '/',
    redirect: '/home'
  },
];
const router = new Router({
  mode: 'hash',
  routes,
});
export default router;
