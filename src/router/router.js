import { createRouter, createWebHistory } from 'vue-router'
import store from '../plugins/store'

import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import Home from '../components/Home.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            name: 'signup',
            component: Signup
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: ForgotPassword
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ]
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', 'forgot-password'];
    const authRequired = !publicPages.includes(to.path);
    
    const loggedIn = store.state.user.loggedIn;
    console.log(loggedIn);
    if (authRequired && loggedIn == false) {
      next('/login');
    } else {
      next();
    }
});

export default router