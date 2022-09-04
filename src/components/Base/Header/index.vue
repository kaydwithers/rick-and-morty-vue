<script setup lang="ts">
import { ref } from "vue";

import { useCharacters } from "@/composables/useCharacters";
import { useTheme } from "@/composables/useTheme";

const { characters, getCharacters } = useCharacters();
const { setTheme, theme } = useTheme();

const isThrottling = ref(false);

/**
 * Returns a random character name.
 *
 * @returns {string} - The character name.
 */
const getRandomName = () => {
  const index = Math.floor(Math.random() * characters.value.length);
  return characters.value[index].name;
};

/**
 * Handle the input value.
 *
 * @param {string} event
 */
const handleInput = (event: Event) => {
  if (isThrottling.value) return;

  isThrottling.value = true;

  setTimeout(() => {
    isThrottling.value = false;

    getCharacters(`?name=${(event.target as HTMLInputElement).value}`);
  }, 600);
};
</script>

<template>
  <header>
    <nav>
      <label for="search">🔍</label>
      <input
        type="text"
        placeholder="Search"
        id="search"
        @input="handleInput"
      />

      <button
        v-if="theme"
        @click="setTheme('')"
        aria-label="Light theme"
        title="Light theme"
      >
        🌞
      </button>
      <button
        v-else
        @click="setTheme('dark')"
        aria-label="Dark theme"
        title="Dark theme"
      >
        🌚
      </button>
    </nav>

    <h1>
      <span v-if="characters.length">
        {{ getRandomName() }} and {{ getRandomName() }}
      </span>
      <span v-else>Rick and Morty</span>
    </h1>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem;
}

nav {
  align-items: center;
  display: flex;
  justify-content: center;
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
  padding: 1rem;
  width: auto;
}

button {
  font-size: 2rem;
  margin-left: 1rem;
}

h1 {
  margin-top: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
}

@media (min-width: 768px) {
  input {
    width: 16rem;
  }
}
</style>
