<template>
  <RestsCard
    v-for="restaurant in restaurants"
    :key="restaurant.id"
    :restaurant="restaurant"
    id="restaurant.restStore.id"
    bill="restaurant.restStore.bill"
    title="restaurant.title"
    rating="restaurant.rating"
    img="restaurant.img"
    eta="restaurant.eta"
    cousine="restaurant.cousine"
  ></RestsCard>
</template>
<script>
import RestsCard from '@/ui/RestsCard.vue'
import { useRestStore } from '@/stores/RestStore';
const restStore = useRestStore();
</script>
<style lang="scss">
</style>
