import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";

import Vue from "vue";
import App from "./App.vue";

// Import your components
import Bibliotheque from "./Bibliotheque-livres.vue";
import Pret from "./Pret-livres.vue";
import Ranger from "./Ranger-livres.vue";
import Saisie from "./Saisie-livres.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/bibliotheque-livres", component: Bibliotheque },
    { path: "/pret-livres", component: Pret },
    { path: "/ranger-livres", component: Ranger },
    { path: "/saisie-livres", component: Saisie },
    { path: "/", component: HomeView },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
