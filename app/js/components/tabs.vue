<style lang="scss">
    @import '../../scss/variables';

    .tabs-details {
        height: 200px;
    }
</style>
<template>
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <router-link @click.native="handleClickTabs(tab.getList)"
                                :to="{ name: handleRouteTab (tab.name) }">{{tab.name}}</router-link>
                    </li>

                </ul>
                <router-view></router-view>
            </div>

        </div>
</template>
<script>
    export default {
        data() {
            return {
                tabs: [
                    {
                        name: "Subscriptions",
                        getList: "fetchSubscripts",
                        isActive: 'true',
                    }
                    ,
                    {
                        name: "Followers",
                        getList: "fetchFollowers",
                        isActive: 'false'
                    },
                    {
                        name: "DbComponent",
                        isActive: 'false'
                    }
                ]
            };
        },
        methods: {


            handleRouteTab: function (name) {
                return name
            },
        handleClickTabs: function (par) {
                if(!par) return;
            this.$store.dispatch(par, this.$store.getters.user);
        }
    }
    };
</script>
