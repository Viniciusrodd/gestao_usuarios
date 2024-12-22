import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import axios from 'axios';
import Edit from '../views/Edit.vue';



function adminAuth(to, from, next){
    if(!localStorage.getItem('token')){
        next('/login');
    }else{
        var req = {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.post('http://localhost:8687/validate', {}, req)
            .then(() =>{
                next();
            })
            .catch((error) =>{
                console.log('error at validate beforeEnter', error.response.data.error)
                next('/login')
            })
    }
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/register',
        name: 'resgister',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/admin/users',
        name: 'users',
        component: Users,
        beforeEnter: adminAuth
    },
    {
        path: '/users/edit/:id',
        name: 'edit',
        component: Edit,
        beforeEnter: adminAuth
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
