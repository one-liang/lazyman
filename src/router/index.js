import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/page/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/page/About.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
})

export default router