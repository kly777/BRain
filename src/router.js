import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import ToDoCal from "./components/ToDoCal.vue";
import Login from "./components/auth/Login.vue";
import Logout from "./components/auth/Logout.vue";
import CardPlay from "./components/CardPlay.vue";
import CardInfo from "./components/card/CardInfo.vue";
const routes = [
    { path: "/todo-cal", component: ToDoCal },
    { path: "/", component: Home },
    { path: "/logout", component: Logout },
    { path: "/login", component: Login },
    {
        path: "/card/:card_id(\\d+)",
        component: CardInfo,
        props: true,
        name: "Card",
    },
    {
        path: "/card",
        component: CardPlay,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
