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
<<<<<<< HEAD
          import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
=======
          import(/* webpackChunkName: "about" */ "../views/Home.vue"),
        meta: {
          active: "dashboard",
        },
>>>>>>> 7957c89608375d619c20b31759f268516941e62f
      },
      {
        path: "/About/:userId",
        name: "About",
        component: () =>
<<<<<<< HEAD
          import(/* webpackChunkName: "About" */ "../views/About.vue"),
=======
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: {
          active: "dashboard",
        },
>>>>>>> 7957c89608375d619c20b31759f268516941e62f
      },
      {
        path: "/PromisePage",
        name: "PromisePage",
        component: () =>
<<<<<<< HEAD
          import(/* webpackChunkName: "PromisePage" */ "../views/PromisePage.vue"),
=======
          import(/* webpackChunkName: "about" */ "../views/PromisePage.vue"),
        meta: {
          active: "dashboard",
        },
>>>>>>> 7957c89608375d619c20b31759f268516941e62f
      },
    ],
  },
];

const router = new VueRouter({
  routes: routes,
});


export default router;
