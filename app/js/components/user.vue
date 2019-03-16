<script src="../../../../react-redux/react-redux-starter-kit-master/src/components/Cart.js"></script>
<style lang="scss">
    @import '../../scss/variables';

    .user {
        color: $secondary;
    }
</style>

<template>
  <div class="Results">
    <div class="Item" v-for="item in users">
      <ul>
      <li  v-show="item.login !== 'Not Found' " class="Item__title">{{ item.login}}
              <router-link @click.native="handle(item.id)"
               :to="{path: handleRouteUser(item.id) }">View User</router-link>
      </li>
      </ul>
      <div v-show="item.login === 'Not Found' ">
        {{ item.login}}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        computed: {
        users() {
        return this.$store.getters.users
        }
        },
        methods: {
        handleRouteUser:function (id){
        return '/users/'+id;
             },
            handle:function (id){
                this.$store.dispatch('fetchUser', id);
            }
             }
    };
</script>
