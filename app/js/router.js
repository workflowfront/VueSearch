import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './nav/home.vue';
import Error from './nav/error.vue';
import Preview from './nav/preview.vue';
import Subscript from './components/subscript.vue';
import Follower from './components/follower.vue';
import ProductDetail from './components/productDetail.vue';
import DbComponent from './components/dbComponent.vue';
Vue.use(VueRouter);

const routes = [
    { path: '/', 
    component: Home},
    {
          path: '/users/:id',
          component: Preview,
          props: true,
          children: [
          {
          	path: 'subscriptions',
              name: 'Subscriptions',
          component: Subscript
           },
           {
          	path: 'followers',
               name: 'Followers',
          component: Follower
           },
              {
                  path: 'DbComponent',
                  name: 'DbComponent',
                  component: DbComponent
              },
          ]
        },
    {
        path: '/product/:id',
        component: ProductDetail,

    },
    { path: '/404', component: Error },
    { path: '*', redirect: '/404' },


];

export default new VueRouter({ mode: 'history', routes });
