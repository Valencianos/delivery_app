<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <div class="banner__box">
          <h1 class="banner__title">Онлайн-сервис доставки&NonBreakingSpace;еды на дом</h1>
          <p class="banner__description">
            Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
<style lang="scss">
.banner {
  width: 100%;
  margin-bottom: 56px;
  &__wrapper {
    background-image: url('@/assets/img/banner_background.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center right;
    border-radius: 10px;
    background-color: #fff1b8;
  }
  &__box {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 68px 70px;
    max-width: 660px;
  }
  &__title {
    font-weight: 700;
    font-size: 39px;
    color: #302c34;
  }
  &__description {
    font-weight: 400;
    font-size: 24px;
    color: #302c34;
  }
}
</style>
