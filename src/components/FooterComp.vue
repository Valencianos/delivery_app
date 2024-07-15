<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__box">
        <LogoUI></LogoUI>
        <NavPanel></NavPanel>
        <SocialIcons></SocialIcons>
      </div>
    </div>
  </footer>
</template>
<script setup>
import LogoUI from '@/ui/LogoUI.vue'
import NavPanel from '@/ui/NavPanel.vue'
import SocialIcons from '@/ui/SocialIcons.vue'
</script>
<style lang="scss">
.footer {
  min-height: 156px;
  padding: 60px 0;
  &__box {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 35px;
  }
}
</style>
