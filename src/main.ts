/* eslint-disable @typescript-eslint/camelcase */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "@/store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Button from "@/components/Button.vue";
Vue.config.productionTip = false;
Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);
Vue.component("FormItem", FormItem);
Vue.component("Button", Button);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// if (document.documentElement.clientWidth > 500) {
//   window.alert("请使用手机打开本页面，已确保浏览效果");
//   const img = document.createElement("img");
//   img.src = `${__webpack_public_path__}qrcode.png`;
//   img.style.position = "fixed";
//   img.style.left = "50%";
//   img.style.top = "50%";
//   img.style.transform = "translate(-50%,-50%)";
//   img.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
//   document.body.appendChild(img);
// }
