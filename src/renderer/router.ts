import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/login",
      component: () => import("@/views/login/Login")
    },
    {
      path: "/home",
      component: () => import("@/views/home/Home")
    }
  ]
});
