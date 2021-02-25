import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/agencies",
		name: "Agencies",
		component: () => import("../components/Agencies.vue"),
	},
	{
		path: "/laws",
		name: "Laws",
		component: () => import("../components/Laws.vue"),
	},
	{
		path: "/statuses",
		name: "Statuses",
		component: () => import("../components/Statuses.vue"),
	},
	{
		path: "/ia",
		name: "IA",
		component: () => import("../components/details/IA.vue"),
	},
	{
		path: "/iiriar",
		name: "IIRIAR",
		component: () => import("../components/details/IIRIAR.vue"),
	},
	{
		path: "/irca",
		name: "IRCA",
		component: () => import("../components/details/IRCA.vue"),
	},
	{
		path: "/:abbr",
		name: "Details",
		component: () => import("../components/Details.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
