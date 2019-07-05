import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import Loader from './components/Loader.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('Loader', Loader);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
