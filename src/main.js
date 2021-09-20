import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import router from './router/router'

// Firebase
import './plugins/firebase'

const app = createApp(App)
app.use(router)
app.mount('#app')
