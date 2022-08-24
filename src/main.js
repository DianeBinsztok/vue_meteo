import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Random from "./components/Random.vue";
import City from "./components/Random.vue";
import CitiesList from "./components/CitiesList.vue";

import "./assets/main.css";

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/random", component: Random },
  { path: "/cities", component: CitiesList },
  { path: "/city/:id", component: City, name: "city" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
