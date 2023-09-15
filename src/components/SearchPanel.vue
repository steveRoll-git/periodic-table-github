<script setup lang="ts">
import type { ElementDef } from '@/elements'
import { searchGitHub, type FetchError, type SearchResult } from '@/githubSearch'
import type { Result } from '@/result'
import { ref, watch } from 'vue'
import RepoCard from './RepoCard.vue'

const props = defineProps<{
  element: ElementDef
}>()

const sort = ref('stars')

const loading = ref(true)
const result = ref<Result<SearchResult, FetchError>>()

const searchQuery = () => props.element.name.toLowerCase()

watch(
  [() => props.element, sort],
  async () => {
    loading.value = true
    const r = await searchGitHub(searchQuery(), sort.value)
    loading.value = false
    result.value = r
  },
  { immediate: true }
)
</script>

<template>
  <div class="searchPanel">
    <div class="searchHeader">
      <div class="searchTitle">
        {{ element.name }}
      </div>
      <div>
        Sort:
        <select v-model="sort">
          <option value="stars">Stars</option>
          <option value="updated">Updated</option>
        </select>
      </div>
    </div>
    <img v-if="loading" class="spinner" src="@/assets/tail-spin.svg" width="42" />
    <template v-else-if="result?.ok">
      <RepoCard v-for="repo in result.result.items" :key="repo.full_name" :repo="repo" />
      <a
        v-if="result.result.items.length < result.result.total_count"
        :href="`https://github.com/search?q=${searchQuery()}+in:name&type=repositories`"
        target="_blank"
        style="text-align: center; margin-bottom: 6px"
      >
        ...and {{ result.result.total_count - result.result.items.length }} more
      </a>
    </template>
    <div v-else-if="result" class="errorText">
      Error {{ result.error.code }}<br />{{ result.error.data }}
    </div>
  </div>
</template>

<style>
.searchPanel {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  height: 70vh;
  margin-bottom: 32px;
  overflow: scroll;
}

.searchHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  padding: 12px 8px;
}

.searchTitle {
  font-size: 32px;
  font-weight: bold;
}

.spinner {
  filter: invert(100%);
  margin-top: 32px;
  align-self: center;
}

.errorText {
  color: red;
}
</style>
