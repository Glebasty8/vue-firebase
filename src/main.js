import Vue from 'vue'
import VueFire from 'vuefire';
import PortalVue from 'portal-vue'
import Root from './Root.vue'
import router from './router/index'
import store from './store';

import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)
Vue.use(PortalVue)

let app = '';

firebase.initializeApp({
    apiKey: "AIzaSyCQ8N8b6xv5-BR02izaVL3WNfkugvM6chc",
    authDomain: "playground-87057.firebaseapp.com",
    databaseURL: "https://playground-87057.firebaseio.com",
    projectId: "playground-87057",
    storageBucket: "playground-87057.appspot.com",
    messagingSenderId: "860613650311"
})

export const db = firebase.firestore()

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(Root)
    }).$mount('#app');
  }
})
