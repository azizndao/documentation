import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/docs',
        name: 'Docs',
        component: () => import( '../views/Docs.vue')
    },
    {
        path: '/forum',
        name: 'Forum',
        component: () => import( '../views/Forum.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import( '../views/Blog.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import( '../views/Profile.vue')
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: () => import( '../views/SignIn.vue')
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import( '../views/SignUp.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import( '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
