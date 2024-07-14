<template>
  <div class="page__wrapper">
    <HeaderComp></HeaderComp>
    <!-- <HomeView></HomeView> -->
  </div>
</template>

<script setup>
import HeaderComp from './components/HeaderComp.vue'
// import HomeView from './views/HomeView.vue'

</script>

<style lang="scss">
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  }

  body {
    text-decoration: none;
    background-color: #fff;
  }

  a {
    background-color: transparent;
    text-decoration: none;
  }
  .page__wrapper {
  display: flex;
  flex-direction: column;
}
</style>