<script setup lang="ts">
import type { ElementDef } from '@/elements'

defineProps<{
  elementDef: ElementDef
}>()
</script>

<template>
  <div class="elementSquare">
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
}
.elementSymbol {
  font-size: 26px;
}
</style>
