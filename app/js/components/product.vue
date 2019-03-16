<style lang="scss">
    @import '../../scss/variables';

    .product {
        position: relative;
        top: $spacing;
        right: $spacing;
        z-index: 9;
    }
</style>

<template>
    <div class="product" v-bind:style="styleSliderObject">
        <input v-model="inp" @click="click"/>
        <span>result</span> <span>{{inpSpan}}</span>
       <span>{{textSlider}}</span>
        <span>Products count:</span>
        <router-link :to="'/product/' + product.id" tag="h4"><a>{{ product.title }}</a></router-link>
    </div>
</template>

<script>

    export default {
        props: {product: Object},
        data: function () {
            return {
              styleSliderObject: {
                    background: `url(${this.product.thumbnail_url}) no-repeat 50% 50%`
                },
                textSlider: this.product.title,
                inp: 'devel',
                inpSpan: this.product.title+'hQMiouFTie'

            }
        },
        watch: {
          inp(){
              this.inpSpan = '';
          }
        },
        methods: {
            click(){
                this.inpSpan=this.inp+this.product.title+'ggg';
            }
        }
    };
</script>
