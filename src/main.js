import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "./jquery.min";
import {store} from "./store/store";
import "./registerServiceWorker";
//plugins
import NowUIKit from './plugins/now-ui-kit';
import Validate from './plugins/jquery.validate.min';
import 'es6-promise/auto';
import axios from 'axios';
import VueAuth from '@websanova/vue-auth';
import VueAxios from 'vue-axios';
import auth from './auth';
import FlashMessage from 'vue-flash-message';



/*Dashboard*/
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components_dash/NotificationPlugin";
import MaterialDashboard from "./material-dashboard";
import Chartist from "chartist";
Vue.prototype.$Chartist = Chartist;
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);




// Set Vue router
Vue.router = router

//Message de confirmation post-emailing
Vue.use(FlashMessage);
require('vue-flash-message/dist/vue-flash-message.min.css');

// Set Vue globally
window.Vue = Vue

// Set Vue Axios
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `http://127.0.0.1:8000/api/`

// Set Vue authentication
Vue.use(VueAuth, auth)

//Template HTML
Vue.use(NowUIKit);

//Validation de form
Vue.use(Validate);

Vue.config.productionTip = false;


new Vue({
  router, jQuery,
  store,
  data: {
    Chartist: Chartist
  },
  render: h => h(App)
}).$mount("#app");


