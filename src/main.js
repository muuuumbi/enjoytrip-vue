import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { memberStore } from "./store";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.component("memberStore", memberStore);

app.mount("#app");
