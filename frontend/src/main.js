import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router/index.js";
import vuetify from "@/plugins/vuetify";
import { createPinia } from 'pinia'
import axios from 'axios';

const app = createApp(App);
const pinia = createPinia()

app.use(router) // 추가
app.use(vuetify) // 추가
app.use(pinia) // 추가

app.config.globalProperties.axios=axios;
app.config.globalProperties.foo = 'bar';

app.mount('#app')
