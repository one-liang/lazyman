import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/view/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/view/About.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
})

export default router