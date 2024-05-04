<template>
  <div class="container">
    <TheHeader/>
    <slot>this is main</slot>
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