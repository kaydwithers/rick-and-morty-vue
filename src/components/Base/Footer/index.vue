<script setup lang="ts">
import { useCharacters } from "@/composables/useCharacters";

const { currentPage, getUpdatedPage } = useCharacters();

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
    <button
      aria-label="Previous page"
      :disabled="currentPage <= 1"
      title="Previous page"
      @click="handlePrevious"
    >
      👈
    </button>
    <p>{{ currentPage }}</p>
    <button aria-label="Next page" title="Next page" @click="handleNext">
      👉
    </button>
  </footer>
</template>

<style scoped>
footer {
  align-items: baseline;
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 4rem 1rem;
}

button {
  font-size: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

button:disabled {
  cursor: default;
  opacity: 0.3;
}
</style>
