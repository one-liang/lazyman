import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index';
import store from '@/store';
import '@/assets/style/tailwind.postcss'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
