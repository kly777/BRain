import { createApp } from "vue";
import "./style.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";

import { createPinia } from "pinia";

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia();

const vuetify = createVuetify({
    components,
    directives,
})

import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(pinia);
app.use(vuetify); // 确保在 mount 之前使用 Vuetify 插件

app.mount("#app");
