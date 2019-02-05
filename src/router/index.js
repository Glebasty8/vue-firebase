import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import About from '@/views/About.vue'
import TodoDetails from '@/views/TodoDetails.vue'
import NotFound from '@/views/NotFound.vue'
import Locations from '@/views/Locations.vue'
import SignUp from '@/views/SignUp.vue'

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
    if (to.hash && document.querySelector(to.hash)) {
        return { selector: to.hash };
    }
    if (savedPosition) {
        return savedPosition;
    }
    return { x: 0, y: 0 };
};

const router = new Router({
    mode: 'history',
    scrollBehavior,
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                title: "Home",
                requiresAuth: true,
            },
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                title: "About",
                requiresAuth: true,
            },
        },
        {
            path: '/todo/:id',
            name: 'todoDetails',
            component: TodoDetails,
            meta: {
                title: "Todo Item",
                requiresAuth: true,
            },
        },
        {
            path: '/locations',
            name: 'locations',
            component: Locations,
            meta: {
                title: "Locations",
                requiresAuth: true,
            },
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: "Login",
            },
        },
        {
            path: '/sign-up',
            name: 'signUp',
            component: SignUp,
            meta: {
                title: "SignUp",
            },
        },
        {
            // will match everything
            path: '*',
            component: NotFound,
        }
    ]
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('home');
    document.title = to.meta.title;
    next();
});

export default router;
