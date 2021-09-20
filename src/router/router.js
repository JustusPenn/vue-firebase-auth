import { createRouter, createWebHistory } from 'vue-router'

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

export default router