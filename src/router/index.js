import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/member/signup",
      name: "signup",
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/MainView.vue"),
    },
  ],
});

export default router;
