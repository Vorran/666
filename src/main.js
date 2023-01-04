import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootswatch/dist/vapor/bootstrap.min.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
