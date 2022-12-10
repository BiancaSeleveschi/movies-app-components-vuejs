import {createRouter, createWebHistory} from "vue-router";

import Movies from "@/views/Movies";
import About from "@/views/About";
import Contact from "@/views/Contact";

let routes = [
    {
        path: "/",
        name: "movies",
        component: Movies
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, //routes: routes
})

export default router
