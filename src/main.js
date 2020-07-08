import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import Home from "./components/Home";
import Login from "./components/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
