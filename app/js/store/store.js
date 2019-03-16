import Vue from 'vue';
import Vuex from 'vuex';
import serchBlock from './modules/serchBlock';
import products from './modules/products';
import * as actions from './actions';

Vue.use(Vuex);
console.log(new Vuex.Store({
    actions,
    modules: {
        serchBlock,
        products

    }
}));
export default new Vuex.Store({
    actions,
    modules: {
        serchBlock,
        products

    }
});
