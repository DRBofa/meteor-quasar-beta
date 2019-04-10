import Vue from 'vue';
import App from './App.vue';
import './main.html';

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes'
const router = new VueRouter({
  routes // short for `routes: routes`
})

// import  {Quasar}  from 'quasar'
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.min.css';
// Vue.use(Quasar, {
//   config: {
//     brand: {
//       primary: '#027BE3',
//       secondary: '#26A69A',
//       accent: '#9C27B0',

//       positive: '#21BA45',
//       negative: '#C10015',
//       info: '#31CCEC',
//       warning: '#F2C037'
//     }
//   }
// })




Meteor.startup(() => {
  new Vue({
    router,
    el: '#app',
    ...App,
  });
});