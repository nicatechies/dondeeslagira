import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import BootstrapVue from 'bootstrap-vue';
import VueI18n from 'vue-i18n';

import App from './App.vue';
import router from './router';
import store from './store';
import Loader from './components/Loader.vue';
import Content from './components/Content.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('Loader', Loader);
Vue.component('Content', Content);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

// i18n
Vue.use(VueI18n);
const i18n = new VueI18n({ locale: 'en' });

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
