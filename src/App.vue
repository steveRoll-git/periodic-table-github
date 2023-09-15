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
  <a class="sourceLink" href="https://github.com/steveRoll-git/periodic-table-github">
    <img src="@/assets/github-mark.svg" width="24" />
    source
  </a>

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

.sourceLink {
  position: absolute;
  top: 0;
  inset-inline-end: 0;
  padding: 16px;

  display: flex;
  align-items: center;
}

.sourceLink > img {
  padding-inline-end: 4px;
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
