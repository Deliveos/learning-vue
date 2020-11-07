import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './pages/Home'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '*',
            name: 'not found',
            component: () => import('./pages/404')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./pages/About')
        }

    ]
})