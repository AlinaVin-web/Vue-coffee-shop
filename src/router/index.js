import { createWebHistory, createRouter } from 'vue-router'

import HeroView from "../views/HeroView.vue";
import OurCoffeeView from "../views/OurCoffeeView.vue";
import ForYourPleasureView from "../views/ForYourPleasureView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import ThankYouView from "../views/ThankYouView.vue";
//import ItemView from "../views/ItemView.vue";

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffeeView },
    { path: '/for-your-pleasure', component: ForYourPleasureView },
    { path: '/contact-us', component: ContactUsView },
    { path: '/thank-you', component: ThankYouView }
    //{ path: '/item', component: ItemView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;