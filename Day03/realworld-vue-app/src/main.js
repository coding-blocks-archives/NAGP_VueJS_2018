import Vue from "vue";
import VueDevtools from "@vue/devtools";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/main.css";

Vue.config.productionTip = false;
if (process.env.NODE_ENV === "development") {
  VueDevtools.connect();
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
