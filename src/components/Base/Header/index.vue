<script setup lang="ts">
import { ref } from "vue";
import { getAllCharacters } from "@/composables/useCharacters";

defineProps<{
  modelValue?: string;
}>();

const hasTheme = ref(false);

/**
 * Handle the input value.
 *
 * @param {string} event
 */
const handleInput = (event: Event) => {
  getAllCharacters(`?name=${(event.target as HTMLInputElement).value}`);
};

/**
 * Handle the click of the theme buttons.
 *
 * @param {string} theme - The theme to add.
 */
const handleTheme = (theme: string) => {
  hasTheme.value = !hasTheme.value;
  theme ? (document.body.className = theme) : (document.body.className = "");
};
</script>

<template>
  <header>
    <label for="search">🔍</label>
    <input type="text" placeholder="Search" id="search" @input="handleInput" />

    <button v-if="hasTheme" @click="handleTheme('')">🌞</button>
    <button v-else @click="handleTheme('dark')">🌚</button>
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
