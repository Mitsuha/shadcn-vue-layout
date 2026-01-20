import { createRouter, createWebHistory } from "vue-router"
import AppLayout from "@/layouts/AppLayout.vue"
import Dashboard from "@/pages/dashboard/dashboard.vue"
import Settings from "@/pages/settings/settings.vue"
import Login from "@/pages/auth/login.vue"
import Register from "@/pages/auth/register.vue"

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "settings",
        name: "settings",
        component: Settings,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "register",
        name: "register",
        component: Register,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
