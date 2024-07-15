<template>
  <div class="cart-modal__overlay" :class="{open: isOpen}" @click.self="closeModal()">
    <div class="cart-modal">
      <CartHeader></CartHeader>
      <CartComp></CartComp>
      <CartFooter></CartFooter>
    </div>
  </div>
</template>
<script setup>
import CartHeader from '@/ui/CartHeader.vue'
import CartComp from '@/components/CartComp.vue'
import CartFooter from '@/ui/CartFooter.vue'

defineProps({
  isOpen: {
    type: Boolean
  }
})

const emit = defineEmits(['toggleModal'])
const closeModal = () => emit('toggleModal')
</script>
<style lang="scss">
.cart-modal__overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
  align-items: center;
  justify-content: center;
}

.cart-modal__overlay.open {
  display: flex;
}

.cart-modal {
  max-width: 780px;
  width: 100%;
  padding: 40px 45px;
  background: #fff;
  border-radius: 5px;
}
</style>
