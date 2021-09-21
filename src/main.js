import { createApp } from 'vue'
import App from './App.vue'

import store from './plugins/store'

// Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import './assets/css/main.css'

import router from './router/router'

// Firebase
import './plugins/firebase'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
const auth = getAuth()
onAuthStateChanged(auth, (user) =>{
    store.dispatch('fetchUser', user)
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
