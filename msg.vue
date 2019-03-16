<style lang="scss">
    @import '../../scss/variables';

    .nmsg {
        float: right;
        border-radius: $borderRadius;
        margin-bottom: $spacing;
        max-width: 12.5rem;
        padding: $spacing;
        background: $success;
        color: $white;
        clear: both;
        opacity: 0.85;
    }
</style>

<template>
    <div class="msg" v-if="isVisible">
        <span>{{msg.message}}</span>
    </div>
</template>

<script>
    export default {
        props: ['msg'],
        data() {
            return {
                isVisible: true
            };
        },
        mounted() {
            setTimeout(() => {
                this.isVisible = false;
            }, 2000);
        }
    };
</script>
