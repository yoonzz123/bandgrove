import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router/index.js";
import vuetify from "@/plugins/vuetify";

const app = createApp(App);
app.use(router) // 추가
app.use(vuetify) // 추가
app.mount('#app')
