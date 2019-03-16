<style lang="scss">
    @import '../../scss/variables';

    .home {
        padding: $spacing;
    }
</style>

<template>
    <div class="home">
        <list></list>
        <h1>Search</h1>
        <user></user>
         <input type="text" class="Search__input" v-model="query">
    <button class="Search__button" @click="search()">Найти</button>
        <list-product></list-product>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import List from '../components/user.vue';
    import ListProduct from '../components/listProduct.vue';
    import User from '../components/list.vue'

    export default {
      data() {
    return {
      query: ''
    }
  },
  methods: {
    search() {
      this.$store.dispatch('fetchUsers', this.query)
    }
  },
        components: { List , User,ListProduct },
        created() {
            this.$store.dispatch('addErMsg', { message: 'HIII!!!' });
        }
        /*computed: {
            ...mapGetters([
                'user'
            ])
        }*/
    };
</script>
