import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "form",
    component: () => import("@/pages/FormPage/index.vue"),
  },
  {
    path: "/check",
    name: "formCheck",
    component: () => import("@/pages/CheckFormPage/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
