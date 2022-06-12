<script setup lang="ts">
import { getAllCharacters } from "@/composables/useCharacters";
import { setTheme, theme } from "@/composables/useTheme";

defineProps<{
  modelValue?: string;
}>();

/**
 * Handle the input value.
 *
 * @param {string} event
 */
const handleInput = (event: Event) => {
  getAllCharacters(`?name=${(event.target as HTMLInputElement).value}`);
};
</script>

<template>
  <header>
    <label for="search">🔍</label>
    <input type="text" placeholder="Search" id="search" @input="handleInput" />

    <button v-if="theme" @click="setTheme('')">🌞</button>
    <button v-else @click="setTheme('dark')">🌚</button>
  </header>
</template>

<style scoped>
header {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;
}

label {
  font-size: 2rem;
  margin-right: 1rem;
}

input {
  border-color: inherit;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 2px;
  font-size: 1rem;
  padding: 1rem;
  width: auto;
}

button {
  font-size: 2rem;
  margin-left: 1rem;
}

@media (min-width: 768px) {
  input {
    width: 16rem;
  }
}
</style>
