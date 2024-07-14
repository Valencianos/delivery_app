<template>
  <main>
    {{ restStore.title }}
  </main>
</template>
<script setup>
import { useRestStore } from '@/stores/RestStore';

const restStore = useRestStore();
</script>

