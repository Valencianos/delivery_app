<template>
  <div class="cart-modal__body">
    <CartItem
      v-for="item in restStore.restaurants"
      :key="item.id"
      :cartItem="item"
      name="restaurant.menu.name"
      price="restaurant.menu.price"
    ></CartItem>
  </div>
</template>
<script setup>
import { useRestStore } from '@/stores/RestStore'
const restStore = useRestStore()
</script>
<style lang="scss">
.cart-modal__body {
  margin-bottom: 50px;
}
</style>
