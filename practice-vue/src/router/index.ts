import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "dashboard",
    redirect: "/Home",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/desktop/index.vue"),
    children: [
      {
        path: "/Home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
      },
      {
        path: "/About/:userId",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "About" */ "../views/About.vue"),
      },
      {
        path: "/PromisePage",
        name: "PromisePage",
        component: () =>
          import(/* webpackChunkName: "PromisePage" */ "../views/PromisePage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes: routes,
});


export default router;
