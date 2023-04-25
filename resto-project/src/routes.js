import { createWebHistory, createRouter } from "vue-router";
import SignUp from './components/SignUp';
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import AddRestro from './components/AddRestro'
import UpdateRestro from './components/UpdateRestro'

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'SignUp',
        path: '/sign-up',
        component: SignUp
    },
    {
        name: 'LoginPage',
        path: '/login',
        component: LoginPage
    },
    {
        name: 'AddRestro',
        path: '/add',
        component: AddRestro
    },
    {
        name: 'UpdateRestro',
        path: '/update/:id',
        component: UpdateRestro
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;