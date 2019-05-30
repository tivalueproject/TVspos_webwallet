import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Signup from '../components/Signup.vue'
import Restore from '../components/Restore.vue'
import Login from '../components/Login'
import Terms from '../components/Terms'
import Warning from '../components/Warning'
import DownloadColdMobile from '../components/download/DownloadColdMobile'
import DownloadHotMobile from '../components/download/DownloadHotMobile'
import PlanarCodeCold from '../components/download/PlanarCodeCold'
import PlanarCodeHot from '../components/download/PlanarCodeHot'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/signup',
        name: 'signup',
        component: Signup
    }, {
        path: '/restore',
        name: 'restore',
        component: Restore
    }, {
        path: '/terms',
        name: 'terms',
        component: Terms
    }, {
        path: '/warning',
        name: 'warning',
        component: Warning
    }, {
        path: '/downloadColdMobile',
        name: 'downloadColdMobile',
        component: DownloadColdMobile
    }, {
        path: '/downloadHotMobile',
        name: 'downloadHotMobile',
        component: DownloadHotMobile
    }, {
        path: '/planarCodeCold',
        name: 'planarCodeCold',
        component: PlanarCodeCold
    }, {
        path: '/planarCodeHot',
        name: 'planarCodeHot',
        component: PlanarCodeHot
    }
    ]
})
