<script setup lang="ts">
import type { RepoSearchResultItem } from '@/githubSearch'

defineProps<{
  repo: RepoSearchResultItem
}>()
</script>

<template>
  <div class="repoCard">
    <div style="position: relative; display: flex; height: fit-content">
      <img class="avatar" :src="repo.owner?.avatar_url" />
      <div style="margin-inline-start: 6px">
        <span class="repoAuthor">{{ repo.owner?.login }}/</span><br />
        <a class="repoName" :href="repo.html_url" target="_blank">{{ repo.name }}</a>
      </div>
      <div style="position: absolute; inset-inline-end: 0; text-align: right">
        <div class="starCounter">
          {{ repo.stargazers_count }}
        </div>
        <div class="updated">
          {{ repo.updated_at.slice(0, 10) }}
        </div>
      </div>
    </div>
    <div class="repoDescription">
      {{ repo.description }}
    </div>
  </div>
</template>

<style>
.repoCard {
  flex: 0 0 0;
  display: grid;
  grid-template-rows: auto auto;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
  margin: 6px 6px;
  padding: 12px;
  gap: 8px;
}

.avatar {
  height: 48px;
  width: auto;
}

.repoAuthor {
  color: gray;
  font-size: 12px;
  line-height: 0.8;
}

.repoName {
  font-size: 20px;
}

.starCounter::after {
  content: url('@/assets/star.svg');
  margin-inline-start: 2px;
  width: 16px;
  height: 16px;
}

.updated {
  color: gray;
}

.repoDescription {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
