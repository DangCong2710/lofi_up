import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../pages/HomeView.vue"

const router = createRouter({
    scrollBehavior () {
        return { top: 0};
    },
    history: createWebHistory(),
    routes: [
        {
            path: "/home",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "About",
            component: () => import("../pages/AboutView.vue"),
        }
    ]
})

export default router;