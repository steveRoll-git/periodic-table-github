<script setup lang="ts">
import { elements, type ElementDef } from '@/elements'
import ElementSquare from './ElementSquare.vue'
import { ref } from 'vue'
import InfoPopup from './InfoPopup.vue'

const hoveringElement = ref<{
  docElement: Element
  elementDef: ElementDef
}>()

const emit = defineEmits<{
  elementClick: [elementDef: ElementDef]
}>()

function elementPointerOver(e: PointerEvent, elementDef: ElementDef) {
  if (e.target) {
    hoveringElement.value = {
      docElement: e.target as Element,
      elementDef
    }
  }
}
function elementPointerOut(e: PointerEvent, elementDef: ElementDef) {
  if (hoveringElement.value?.elementDef.symbol == elementDef.symbol) {
    hoveringElement.value = undefined
  }
}
</script>

<template>
  <div class="periodicTable">
    <ElementSquare
      v-once
      v-for="element in elements"
      :key="element.symbol"
      :element-def="element"
      @pointerover="elementPointerOver"
      @pointerout="elementPointerOut"
      @click="(e, ed) => emit('elementClick', ed)"
    />
  </div>
  <Teleport v-if="hoveringElement" :to="hoveringElement?.docElement">
    <InfoPopup :element-def="hoveringElement.elementDef" />
  </Teleport>
</template>

<style scoped>
.periodicTable {
  display: grid;
  width: calc(18 * (var(--element-square-size) + var(--element-table-gap)));
  height: calc(10 * (var(--element-square-size) + var(--element-table-gap)));
  gap: var(--element-table-gap);
}
</style>
