<template>
  <div class="cart-modal__header">
    <h2 class="cart-modal__header_title">Корзина</h2>
    <span class="cart-modal__header_close" @click="closeModal()">
      <img src="http://localhost:5173/src/assets/img/icons/cart-modal-close.svg" alt="Cart Modal Close"/>
    </span>
  </div>
</template>
<script setup>

</script>
<style lang="scss">
.cart-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  &_title {
    font-weight: 700;
    font-size: 36px;
    color: #000;
  }
  &_close {
    color: #000;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
}
</style>
