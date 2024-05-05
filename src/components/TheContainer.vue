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

<style lang='less' scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>