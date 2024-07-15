<template>
  <div class="footer__links">
    <router-link to="#" href="./product.html" class="footer__link">Ресторанам</router-link>
    <router-link to="#" href="./product.html" class="footer__link">Курьерам</router-link>
    <router-link to="#" href="./product.html" class="footer__link">Пресс-центр</router-link>
    <router-link to="#" href="./product.html" class="footer__link">Контакты</router-link>
  </div>
</template>
<script></script>
<style lang="scss">
.footer__links {
  flex-grow: 1;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
.footer__link {
  font-weight: 400;
  font-size: 18px;
  color: #595959;
}
</style>
