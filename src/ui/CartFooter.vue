<template>
  <div class="cart-modal__footer">
    <div class="cart-modal__footer_price">1250 ₽</div>
    <div class="cart-modal__footer_btn-block">
      <ButtonUI button="filled" title="Оформить заказ"></ButtonUI>
      <ButtonUI button="outline" title="Отмена"></ButtonUI>
    </div>
  </div>
</template>
<script setup>
import ButtonUI from '@/ui/ButtonUI.vue'
</script>
<style lang="scss">
.cart-modal__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  &_price {
    border-radius: 5px;
    padding: 15px 20px;
    background: #262626;
    font-weight: 700;
    font-size: 20px;
    color: #fafafa;
    text-align: center;
  }
  &_btn-block {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
