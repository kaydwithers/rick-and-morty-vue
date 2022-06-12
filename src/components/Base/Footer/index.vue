<script setup lang="ts">
import { currentPage, getUpdatedPage } from "@/composables/useCharacters";

/**
 * Handle the click of the right arrow.
 */
const handleNext = () => {
  getUpdatedPage();
};

/**
 * Handle the click of the left arrow.
 */
const handlePrevious = () => {
  getUpdatedPage(true);
};
</script>

<template>
  <footer>
    <button :disabled="currentPage <= 1" @click="handlePrevious">⬅</button>
    <button @click="handleNext">➡</button>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 4rem 1rem;
}

button {
  font-size: 4rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

button:disabled {
  cursor: default;
  opacity: 0.3;
}
</style>
