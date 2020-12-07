import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyC_X9Q-ae9XQJOOmKOj0EmdsgtqdZb17pg",
  authDomain: "auth-f581f.firebaseapp.com",
  projectId: "auth-f581f",
  storageBucket: "auth-f581f.appspot.com",
  messagingSenderId: "936259797387",
  appId: "1:936259797387:web:ea5b194d57ca0e4c876f8e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user=> {
  console.log(user);
  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
