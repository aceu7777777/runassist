import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Menu, MenuItem,Submenu} from 'element-ui';
//引入elementui样式
import 'element-ui/lib/theme-chalk/index.css';//引入全部的样式
Vue.config.productionTip = false;
//引入按钮
Vue.use(Button)   
//引入nav航
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
