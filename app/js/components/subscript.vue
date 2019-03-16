<style lang="scss">
    @import '../../scss/variables';

</style>
<template>
        <div>
            <div class="subscriptions">
                <ul>
                    <li v-for="subscript in subscripts" >{{subscript.name}}
                        <a
                                :href="subscript['html_url']">View Subscription</a>
                    </li>
                </ul>
            </div>
            
        </div>
</template>
<script>

    export default {
        computed: {
            subscripts() {
                return this.$store.getters.subscripts;
                    }
            }

};
</script>
