import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroView from '../views/HeroView.vue'
import OurCoffeeView from '../views/OurCoffeeView.vue'
import ForYouPleasure from '../views/ForYouPleasure.vue'
import ContactUs from '../views/ContactUs.vue'
import ThanksView from '../views/ThanksView.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffeeView },
    { path: '/your-pleasure', component: ForYouPleasure },
    { path: '/contact', component: ContactUs },
    { path: '/thanks', component: ThanksView },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router