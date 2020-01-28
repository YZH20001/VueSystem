import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login'
import Home from './components/Home'
import Welcome from './components/WelCome'
import User from './components/user/User'
import Rolse from './components/roles/Roles'


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home,
            redirect: '/welcome',
            children: [
                {
                    path: '/welcome',
                    component: Welcome
                }, 
                {
                    path: '/user',
                    component: User
                },
                {
                    path: '/roles',
                    component: Rolse
                }
            ]
        }
    ]
})
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
    //to将要访问的路径
    //from从哪一个路径跳转而来
    //next是一个函数，表示放行
    if (to.path === '/login') return next();
    //获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
})

export default router