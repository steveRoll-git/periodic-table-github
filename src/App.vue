<script setup lang="ts">
import { ref } from 'vue'
import PeriodicTable from './components/PeriodicTable.vue'
import { type ElementDef } from './elements'
import SearchPanel from './components/SearchPanel.vue'

const clickedElement = ref<ElementDef>()

function elementClicked(e: ElementDef) {
  clickedElement.value = e
}
</script>

<template>
  <header>Periodic Table of GitHub Repos</header>

  <main :class="{ searchOpen: !!clickedElement }">
    <PeriodicTable @element-click="elementClicked"></PeriodicTable>
    <SearchPanel v-if="clickedElement" :element="clickedElement" />
  </main>
</template>

<style scoped>
header {
  font-size: 36px;
  line-height: 300%;
  text-align: center;
}

main {
  display: grid;
  grid-template-columns: auto 0;
  transition: grid-template-columns 0.5s ease-out;
  gap: 32px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

main.searchOpen {
  grid-template-columns: auto var(--search-panel-width);
}
</style>
