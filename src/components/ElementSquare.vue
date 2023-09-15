<script setup lang="ts">
import type { ElementDef } from '@/elements'

defineProps<{
  elementDef: ElementDef
}>()

const emit = defineEmits<{
  pointerover: [event: PointerEvent, element: ElementDef]
  pointerout: [event: PointerEvent, element: ElementDef]
  click: [event: MouseEvent, element: ElementDef]
}>()
</script>

<template>
  <div
    class="elementSquare"
    @pointerover="(e) => emit('pointerover', e, elementDef)"
    @pointerout="(e) => emit('pointerout', e, elementDef)"
    @click="(e) => emit('click', e, elementDef)"
  >
    <div class="elementNumber">
      {{ elementDef.number }}
    </div>
    <div class="elementSymbol">
      {{ elementDef.symbol }}
    </div>
  </div>
</template>

<style scoped>
.elementSquare {
  position: relative;
  width: var(--element-square-size);
  height: var(--element-square-size);
  border: 2px solid black;
  border-radius: 5px;
  grid-column: v-bind('elementDef.xpos');
  grid-row: v-bind('elementDef.ypos');
  padding: 4px;
}

.elementNumber {
  font-size: 14px;
  line-height: 0.8;
  color: rgb(102, 102, 102);
  pointer-events: none;
}
.elementSymbol {
  font-size: 26px;
  pointer-events: none;
}
</style>
