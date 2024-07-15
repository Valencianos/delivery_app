<template>
  <ul class="cards__wrapper">
    <GoodsCard
      v-for="product in restStore.menu"
      :key="product.id"
      :menu="product"
      name="product.name"
      ingredients="product.ingredients"
      price="product.price"
      pic="product.pic"
    ></GoodsCard>
  </ul>
</template>
<script setup>
import GoodsCard from '@/ui/GoodsCard.vue'
import { useRestStore } from '@/stores/RestStore'
const restStore = useRestStore()
</script>
<style lang="scss">
.cards__wrapper {
  display: grid;
  grid-template-columns: repeat(3, calc((100% - 48px) / 3));
  row-gap: 30px;
  column-gap: 24px;
}
</style>
