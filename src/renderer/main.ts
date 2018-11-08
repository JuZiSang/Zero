import Vue from "vue";
import App from "@/App";
import router from "./router";
import store from "./store";
import "@/styles/base.scss";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
