import Vue from 'vue';
import VueRouter from 'vue-router';
import Antd from 'ant-design-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import EventBus from "@/plugins/EventBus";
import Editor from "@/plugins/Editor";
import Config from '@/assets/hwc-config.json'


Vue.use(VueRouter);
Vue.use(Antd);
Vue.use(EventBus);
Vue.use(Editor);
Vue.prototype.$config = Config;
Vue.prototype.$http = axios,VueAxios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
