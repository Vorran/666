import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import Vue from "vue";

// Import your components
import Bibliotheque from "../views/Bibliotheque-livres.vue";
import Pret from "../views/Pret-livres.vue";
import Ranger from "../views/Ranger-livres.vue";
import Saisie from "../views/Saisie-livres.vue";

Vue.use(createRouter);

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

export default router;
