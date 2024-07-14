<template>
  <button :class="props.button" class="link__btn">
    <img :src="getImageUrl()" :alt="props.title">
    <span>{{ props.title }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  button: String,
  title: String,
  img: String,
});

function getImageUrl () {
  return new URL(`../assets/img/icons/${props.img}`, import.meta.url);
}

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