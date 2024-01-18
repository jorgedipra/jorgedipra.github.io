import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: page => page(App)
}).$mount('#app');
