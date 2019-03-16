<style lang="scss">
    @import '../../scss/variables';

    .list {
        position: absolute;
        top: $spacing;
        right: $spacing;
        z-index: 9;
    }
</style>

<template>
    <div class="list-products">
        <span>count:{{countProducts}}</span>
     <ul>
         <li v-for="(product, index) in products">
             <product
                     :key="index" :product="product" ></product>
         </li>
     </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Product from './product.vue';

    export default {
        components: { Product },
        computed: {
         ...mapGetters(['products']),
        /*},*/
          /*products: function() {
                console.log('this.$store.getters.products');
                console.log(this.$store.getters.products);
                return this.$store.getters.products;
            },*/
            countProducts: function(products) {
                return this.products.length;
            }
        }
    };
</script>
