import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "dashboard",
    redirect: "/Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/desktop/index.vue"),
    children: [
      {
        path: "/Home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Home.vue"),
        meta: {
          active: "dashboard",
        },
      },
      {
        path: "/About/:userId",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: {
          active: "dashboard",
        },
      },
      {
        path: "/PromisePage",
        name: "PromisePage",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/PromisePage.vue"),
        meta: {
          active: "dashboard",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes: routes,
});


export default router;
