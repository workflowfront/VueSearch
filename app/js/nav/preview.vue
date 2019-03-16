<style lang="scss">
    @import '../../scss/variables';

    .home {
        padding: $spacing;
    }
</style>

<template>
    <div class="home">
        
        <h1>Preview{{msgg}}</h1>
        <tabs>

        </tabs>
        <div>
     
        </div>
    </div>
</template>

<script>
    
    import Tabs from '../components/tabs.vue';
    export default {
      data:()=> {
    return {
      msgg: 'hi'
    }
  },
 components: {  Tabs}
    };
</script>
