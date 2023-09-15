<script setup lang="ts">
import type { ElementDef } from '@/elements'
import { onMounted, ref } from 'vue'

/** How long to wait after the popup is shown before expanding it. */
const expansionDelay = 750

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
  <Transition appear name="slide-fade">
    <div class="infoPopup">
      <div class="elementTitle">{{ elementDef.name }}</div>
      <div class="summaryWrapper" :class="{ open: isExpanded }">
        <div class="summaryInner">{{ elementDef.summary }}</div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.infoPopup {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  inset-inline-start: calc(100% + 5px);
  width: v-bind('isExpanded ? "250px" : "auto"');
  z-index: 2;

  padding: 6px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
}

.elementTitle {
  font-size: 24px;
}

.summaryWrapper {
  display: grid;
  grid-template-rows: 0fr;
  /* grid-template-columns: 0fr; */
  transition: grid-template-rows 0.5s ease-out /*, grid-template-columns 0.5s ease-out*/;
}

.summaryWrapper.open {
  grid-template-rows: 1fr;
  /* grid-template-columns: 1fr; */
}

.summaryInner {
  overflow: hidden;
  padding-top: 6px;
}
</style>
