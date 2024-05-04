<template>
  <div class="container">
    <TheHeader/>
    <router-view></router-view>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
export default {
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style>

</style>