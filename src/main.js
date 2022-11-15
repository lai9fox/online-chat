import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'virtual:svg-icons-register';

import GlobalComponents from '@/components/base/index';

const app = createApp(App);

app.use(GlobalComponents).use(router);

app.mount('#app');
