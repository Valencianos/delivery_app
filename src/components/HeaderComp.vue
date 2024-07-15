<template>
  <header class="header">
    <div class="container">
      <div class="header__menu">
        <LogoUI></LogoUI>
        <div class="link__box">
          <buttonUI 
            button="filled" 
            title="Войти" 
            pic="login.svg">
          </buttonUI>
          <buttonUI 
            button="outline" 
            title="Корзина" 
            pic="shopping_cart.svg"
            @click="openModal"
          ></buttonUI>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import ButtonUI from '@/ui/ButtonUI.vue'
import LogoUI from '@/ui/LogoUI.vue'

const emit = defineEmits(['toggleModal'])
const openModal = () => emit('toggleModal')
</script>

<style lang="scss">
.filled {
  background-color: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
}

.outline {
  background-color: #fff;
  border: 1px solid #d9d9d9;
  color: #595959;
}

.header {
  height: 124px;
  &__menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
}

.link__box {
  display: flex;
  gap: 8px;
}
</style>
