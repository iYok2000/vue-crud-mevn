import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateComponent from '../components/CreateComponent.vue'
import ListComponent from '../components/ListComponent.vue'
import EditComponent from '../components/EditComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/createComponent',
    name: 'Create',
    
    component: CreateComponent
  },
  {
    path: '/view',
    name: 'view',
    component: ListComponent
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditComponent
  },{
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "News" */ '../views/News.vue')
  },
  {
    path: '/bmi',
    name: 'BMI',
    component: () => import(/* webpackChunkName: "BMI" */ '../views/BMI.vue')
  },
  {
    path: '/calculate',
    name: 'Calculate',
    component: () => import(/* webpackChunkName: "Calculate" */ '../views/Calculate.vue')
  },
  {
    path: '/bmr',
    name: 'BMR',
    component: () => import(/* webpackChunkName: "BMR" */ '../views/BMR.vue')
  },
  {
    path: '/iwc',
    name: 'IWC',
    component: () => import(/* webpackChunkName: "IWC" */ '../views/IWC.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: history
})

export default router
