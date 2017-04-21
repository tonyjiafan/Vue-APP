import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './views/index';
import Search from './views/search';
import Teams from './views/teams';

Vue.use(VueRouter);

// 路由配置
const routes = [{
    name: 'index',
    path: '/',
    component: Index,
}, {
    name: 'search',
    path: '/search',
    component: Search,
}, {
    name: 'teams',
    path: '/teams',
    component: Teams,
}];

export default new VueRouter({
    // base: __dirname,
    scrollBehavior() {
        return { y: 0 };
    },
    routes,
});
