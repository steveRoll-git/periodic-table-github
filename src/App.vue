<script setup lang="ts">
import PeriodicTable from './components/PeriodicTable.vue'
</script>

<template>
  <header>Periodic Table of GitHub Repos</header>

  <main>
    <PeriodicTable></PeriodicTable>
  </main>
</template>

<style scoped>
header {
  font-size: 36px;
  line-height: 300%;
  text-align: center;
}

main {
  display: flex;
  justify-content: center;
}
</style>
