import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import UnsupportDevice from "../views/UnsupportDevice.vue";
import RulesPage from "../views/RulesPage.vue";
import SettingsPage from "../views/SettingsPage.vue";



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/unsupportdevice",
      name: "UnsupportDevice",
      component: UnsupportDevice,
    },
    {
      path: "/rulespage",
      name: "RulesPage",
      component: RulesPage,
    },
    {
      path: "/settingspage",
      name: "SettingsPage",
      component: SettingsPage,
    },
  ],
});

export default router;
