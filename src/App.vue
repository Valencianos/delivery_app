<template>
  <div class="page__wrapper">
    <HeaderComp @toggleModal="isOpen = !isOpen"></HeaderComp>
    <router-view></router-view>

    <CartView :isOpen="isOpen" @toggleModal="isOpen = !isOpen"></CartView>
    <FooterComp></FooterComp>
  </div>
</template>

<script setup>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import CartView from '@/views/CartView.vue'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
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
.container {
  max-width: 1230px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  height: 100%;
}
</style>
