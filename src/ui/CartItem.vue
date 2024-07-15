<template>
  <div class="cart-item">
    <div class="cart-item__title">{{ cartItem.name }}</div>
    <div class="cart-item__controls">
      <div class="cart-item__controls_price">{{ cartItem.price }} ₽</div>
      <div class="cart-item__controls_box">
        <button class="cart-item__controls_btn">-</button>
        <span class="cart-items__controls_count">1</span>
        <button class="cart-item__controls_btn">+</button>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps = {
  cartItem: Object
}
</script>
<style lang="scss">
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  &__title {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.77778;
    color: #000;
  }
  &__controls {
    display: flex;
    align-items: center;
    &_price {
      font-weight: 700;
      font-size: 20px;
      line-height: 1.6;
      color: #000;
      margin-right: 46px;
    }
    &_box {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    &_btn {
      border: 1px solid #40a9ff;
      border-radius: 2px;
      padding: 5px 16px;
      background-color: #fff;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.57143;
      text-align: center;
      color: #40a9ff;
    }
    &_count {
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
      color: #000;
    }
  }
}

.cart-item:not(:last-child) {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #d9d9d9;
}
</style>
