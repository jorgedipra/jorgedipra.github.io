import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css';


// Instalar BootstrapVue
Vue.use(BootstrapVue);

new Vue({
  render: page => page(App)
}).$mount('#app');
