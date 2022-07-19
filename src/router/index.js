import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../pages/HomeView'
import ExperienceView from '../pages/ExperienceView';
import SkillsView from '../pages/SkillsView';
import PortfolioView from '../pages/PortfolioView'
import ContactView from '../pages/ContactView'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/experience',
        name: 'Experience',
        component: ExperienceView
    },
    {
        path: '/skills',
        name: 'Skills',
        component: SkillsView
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: PortfolioView
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router