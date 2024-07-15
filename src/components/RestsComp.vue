<template>
  <div class="cards__wrapper">
    <RestCard
      v-for="restaurant in restStore.restaurants"
      :key="restaurant.id"
      :rest="restaurant"
      bill="restaurant.bill"
      title="restaurant.title"
      rating="restaurant.rating"
      img="restaurant.img"
      time="restaurant.time"
      cousine="restaurant.cousine"
    ></RestCard>
  </div>
</template>
<script setup>
import RestCard from '@/ui/RestCard.vue'
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

@media (max-width: 991px) {
  .cards__wrapper {
    grid-template-columns: repeat(2, calc((100% - 20px) / 2));
    row-gap: 24px;
    column-gap: 20px;
  }
}

@media (max-width: 620px) {
  .cards__wrapper {
    grid-template-columns: 100%;
    row-gap: 20px;
  }
}
</style>
