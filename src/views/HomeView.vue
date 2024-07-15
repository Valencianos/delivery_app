<template>
  <main class="main">
    <BannerBlock></BannerBlock>
    <section class="cards">
      <div class="container">
        <div class="cards__box">
          <h2 class="cards__box_title">Рестораны</h2>
          <SearchForm></SearchForm>
        </div>
        <RestsComp></RestsComp>
      </div>
    </section>
  </main>
</template>
<script setup>
import BannerBlock from '@/ui/BannerBlock.vue'
import RestsComp from '@/components/RestsComp.vue'
import SearchForm from '@/ui/SearchForm.vue'
</script>
<style lang="scss">
.main {
  flex-grow: 1;
  background: linear-gradient(180deg, rgba(245, 245, 245, 0) 1.04%, #f5f5f5 100%);
  padding-bottom: 90px;
}
.cards {
  &__box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 44px;
    flex-wrap: wrap;
    gap: 24px;
    &_title {
      font-weight: 700;
      font-size: 36px;
      color: #000;
    }
  }
}
</style>
