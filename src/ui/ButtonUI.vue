<template>
  <button :class="button" class="link__btn">
    <img :src="`http://localhost:5173/src/assets/img/icons/${pic}`" :alt="title" />
    <span>{{ title }}</span>
  </button>
</template>

<script setup>
defineProps({
  button: {
    type: String,
  },
  title: {
    type: String,
  },
  pic: {
    type: String,
    default: '',
  }
})
</script>

<style lang="scss" scoped>
.link__btn {
  padding: 8px 16px;
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
}
</style>
