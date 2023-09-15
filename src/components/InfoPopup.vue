<script setup lang="ts">
import type { ElementDef } from '@/elements'
import { onMounted, ref } from 'vue'

/** How long to wait after the popup is shown before expanding it. */
const expansionDelay = 0.5

const isExpanded = ref(false)

defineProps<{
  elementDef: ElementDef
}>()

onMounted(() => {
  setTimeout(() => {
    isExpanded.value = true
  }, expansionDelay)
})
</script>

<template>
  <div class="infoPopup">
    <div class="elementTitle">{{ elementDef.name }}</div>
  </div>
</template>

<style scoped>
.infoPopup {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  inset-inline-start: calc(100% + 5px);
  z-index: 1;

  padding: 5px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
}

.elementTitle {
  font-size: 24px;
}
</style>
