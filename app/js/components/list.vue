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
    <div class="list">
        <msg
                v-for="(msg, index) in msgs"
                :key="index" :msg="msg"></msg>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Msg from './msg.vue';

    export default {
        components: { Msg },
        computed: {
            ...mapGetters([
                'msgs'
            ])
        }
    };
</script>
