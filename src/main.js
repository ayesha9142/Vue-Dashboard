import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import VueApexCharts from "vue3-apexcharts";

library.add(fas, faEnvelopeSquare, far);


createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.use(VueApexCharts)
.use(BootstrapIconsPlugin)
.mount('#app')
