import Vue from "vue";
import Router from "vue-router";
import VisiteurLayout from "./layout/VisiteurLayout";
import Accueil from "./pages/Accueil";
import Particulier from "./pages/Particulier";
import Entreprise from "./pages/Entreprise";
import Contact from "./pages/ContactUs";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/SignUpPage";
import License from "./pages/License";

import DashboardLayout from "./pages/Layout/DashboardLayout.vue";
import Dashboard from "./pages/Dashboard.vue";


Vue.use(Router);

const router = new Router({

  mode: "history",

  routes: [
    {
      path: "/admin",
      component: DashboardLayout,
      redirect: { name: 'Dashboard' },
      meta: {
        auth: true
      },
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard
        },

      ],

    },
    {
      path: "/",
      component: VisiteurLayout,
      redirect: "/accueil",
      children: [
        {
          path: "accueil",
          name: "Accueil",
          component: Accueil
        },
        {
          path: "particulier",
          name: "Particulier",
          component: Particulier
        },
        {
          path: "/entreprise",
          name: "entreprise",
          components: {default: Entreprise},
          props: {header: {colorOnScroll: 450}}
        },
        {
          path: "/contact",
          name: "contact",
          components: {default: Contact},
          props: {header: {colorOnScroll: 450}}
        },
        {
          path: "/login",
          name: "login",
          components: {default: LoginPage},
          props: {header: {colorOnScroll: 450}},
        },
        {
          path: '/register',
          name: 'register',
          component: Register,
        },
        {
          path: '/license',
          name: 'license',
          component: License,
        },

      ],
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash};
    } else {
      return { x: 0, y: 0 };
    }
  },

  linkExactActiveClass: "nav-item active",
});

export default router;
