import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateComponent from '../components/CreateComponent.vue'
import ListComponent from '../components/ListComponent.vue'
import EditComponent from '../components/EditComponent.vue'
import BlogCreate from '../components/BlogCreate.vue'
import BlogEdit from '../components/BlogEdit.vue'
import BlogList from '../components/ฺBlogList.vue'
import loginPage from '../components/loginPage.vue'

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
    path: '/blogCreate',
    name: 'blogCreate',
    
    component: BlogCreate
  },
  {
    path: '/blogEdit',
    name: 'blogEdit',
    
    component: BlogEdit
  },
  {
    path: '/blogList',
    name: 'blogList',
    
    component: BlogList
  },
  {
    path: '/view',
    name: 'view',
    component: ListComponent
  },
  {
    path: '/loginpage',
    name: 'Login',
    component: loginPage
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditComponent
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "News" */ '../views/News.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "Blogs" */ '../views/Blog.vue')
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
  {
    path: '/bfat',
    name: 'BFAT',
    component: () => import(/* webpackChunkName: "BFAT" */ '../views/BFAT.vue')
  },
  {
    path: '/calroriestable',
    name: 'CALRORIESTABLE',
    component: () => import(/* webpackChunkName: "CALRORIESTABLE" */ '../views/Calroriestable.vue')
  },
  {
    path: '/egg',
    name: 'EGG',
    component: () => import(/* webpackChunkName: "CALRORIESTABLE" */ '../views/Tablecalrories/egg.vue')
  },
  {
    path: '/fish',
    name: 'FISH',
    component: () => import(/* webpackChunkName: "CALRORIESTABLE" */ '../views/Tablecalrories/fish.vue')
  },
  {
    path: '/meat',
    name: 'MEAT',
    component: () => import(/* webpackChunkName: "CALRORIESTABLE" */ '../views/Tablecalrories/meat.vue')
  },
  {
    path: '/veg',
    name: 'VEG',
    component: () => import(/* webpackChunkName: "CALRORIESTABLE" */ '../views/Tablecalrories/veg.vue')
  },
  {
    path: '/food',
    name: 'FOOD',
    component: () => import(/* webpackChunkName: "CALRORIESTABLE" */ '../views/Tablecalrories/food.vue')
  },
  {
    path: '/fruit',
    name: 'FRUIT',
    component: () => import(/* webpackChunkName: "CALRORIESTABLE" */ '../views/Tablecalrories/fruit.vue')
  },
  {
    path: '/milk',
    name: 'MILK',
    component: () => import(/* webpackChunkName: "CALRORIESTABLE" */ '../views/Tablecalrories/milk.vue')
  },
  {
    path: '/been',
    name: 'BEEN',
    component: () => import(/* webpackChunkName: "CALRORIESTABLE" */ '../views/Tablecalrories/been.vue')
  },
  {
    path: '/mainrecipe',
    name: 'Mainrecipe',
    component: () => import(/* webpackChunkName: "Mainrecipe" */ '../views/Mainrecipe.vue')
  },
  {
    path: '/recipe/:slug',
    name: 'Recipe',
    component: () => import(/* webpackChunkName: "recipe" */ '../views/Recipe.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: history
})

export default router
