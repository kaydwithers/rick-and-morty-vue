<script setup lang="ts">
import { characters, getCharacters } from "@/composables/useCharacters";
import { setTheme, theme } from "@/composables/useTheme";

/**
 * Returns a random character name.
 *
 * @returns {string} - The character name.
 */
const getRandomName = () => {
  if (characters.value.length) {
    const index = Math.floor(Math.random() * characters.value.length);
    return characters.value[index].name;
  }
};

/**
 * Handle the input value.
 *
 * @param {string} event
 */
const handleInput = (event: Event) => {
  getCharacters(`?name=${(event.target as HTMLInputElement).value}`);
};
</script>

<template>
  <header>
    <div>
      <label for="search">🔍</label>
      <input
        type="text"
        placeholder="Search"
        id="search"
        @input="handleInput"
      />

      <button v-if="theme" @click="setTheme('')">🌞</button>
      <button v-else @click="setTheme('dark')">🌚</button>
    </div>

    <h1>{{ getRandomName() }} &amp; {{ getRandomName() }}</h1>
  </header>
</template>

<style scoped>
header {
  align-items: center;
  display: flex;
  flex-direction: column;
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
