<script setup lang="ts">
import type { ElementDef } from '@/elements'

defineProps<{
  element: ElementDef
}>()
</script>

<template>
  <div class="searchPanel">
    <div class="searchTitle">
      {{ element.name }}
    </div>
  </div>
</template>

<style scoped>
.searchPanel {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  height: 100%;
  margin-bottom: 32px;
  overflow: hidden;
}

.searchTitle {
  font-size: 32px;
  line-height: 2;
  font-weight: bold;
  text-align: center;
}
</style>
