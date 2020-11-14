import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "*",
    name: "notFound",
    component: () => import("../views/404"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
