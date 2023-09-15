<script setup lang="ts">
import { elements } from '@/elements'
import ElementSquare from './ElementSquare.vue'
</script>

<template>
  <div class="periodicTable">
    <ElementSquare v-for="element in elements" :key="element.symbol" :element-def="element" />
  </div>
</template>

<style scoped>
.periodicTable {
  display: grid;
  width: calc(18 * (var(--element-square-size) + var(--element-table-gap)));
  gap: var(--element-table-gap);
}
</style>
