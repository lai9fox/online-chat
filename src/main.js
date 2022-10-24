import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue';

import BaseComponents from '@/components/base';

const app = createApp(App)

app.component('SvgIcon', SvgIcon);
console.log(BaseComponents);

app.use(router)

app.mount('#app')
