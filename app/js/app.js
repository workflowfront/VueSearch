import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import elementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(elementUI)

Vue.config.errorHandler = (error, vm, info) => {
    store.dispatch('addErMsg', {
        message: error.message,
        info
    });

    console.error(error);
};


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
