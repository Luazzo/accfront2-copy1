<template>
  <transition name="fade" mode="out-in" >
    <div  style="height: 500px; width: 100%; background-color: #ffbe55;"></div>
    <router-view></router-view>
  </transition>
</template>
<script>
  export default {};
</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s;
  }

  .fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */

  {
    opacity: 0;
  }
</style>
