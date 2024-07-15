<template>
  <li class="card">
    <img :src="`http://localhost:5173/src/assets/img/goods/${menu.pic}`" :alt="menu.name" class="card__img" />
    <div class="card__box">
      <div class="product__title">
        <h3 class="product__text">{{ menu.name }}</h3>
        <p class="product__subtitle">{{ menu.ingredients }}</p>
        <div class="product__order">
          <ButtonUI
            button="filled"
            title="В корзину"
            pic="shopping-cart_white.svg"
          ></ButtonUI>
          <div class="product__price">{{ menu.price }} ₽</div>
        </div>
      </div>
    </div>
  </li>
</template>
<script setup>
import ButtonUI from '@/ui/ButtonUI.vue'

defineProps({
  menu: Object
})
</script>
<style lang="scss">
.card {
  list-style: none;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  background: #fff;
  border-radius: 7px;
  overflow: hidden;
  &__img {
    width: 100%;
  }
  &__box {
    padding: 20px 24px 34px 24px;
  }
}

.product__box {
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  margin-bottom: 49px;
}

.product__text {
  font-weight: 400;
  font-size: 24px;
  line-height: 1.33333;
  color: #000;
  margin-bottom: 10px;
}
.product__subtitle {
  font-weight: 400;
  font-size: 18px;
  color: #8c8c8c;
  margin-bottom: 24px;
}
.product__order {
  display: flex;
  gap: 29px;
  align-items: center;
  justify-content: flex-start;
}

.product__price {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6;
  color: #000;
}
</style>
