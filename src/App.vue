<template>
  <div class="wrapper">
    <RouterView />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: { FooterComponent },
};
</script>

<style>
</style>
