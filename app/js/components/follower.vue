<style lang="scss">
    @import '../../scss/variables';

</style>
<template>
    <div>
        <div class="followers">
            <ul>
                <li v-for="follower in followers" >{{follower.login}}
                    <a
                            :href="follower['html_url']">View Follower</a>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>

    export default {
        computed: {
            followers () {
                return this.$store.getters.followers;
            }
        }

    };

</script>
