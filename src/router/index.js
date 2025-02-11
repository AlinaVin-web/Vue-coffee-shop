import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    { path: '/', component: () => import('../views/HeroView.vue') },
    { path: '/our-coffee', component: () => import('../views/OurCoffeeView.vue') },
    { path: '/for-your-pleasure', component: () => import('../views/ForYourPleasureView.vue') },
    { path: '/contact-us', component: () => import('../views/ContactUsView.vue') },
    { path: '/thank-you', component: () => import('../views/ThankYouView.vue') }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;