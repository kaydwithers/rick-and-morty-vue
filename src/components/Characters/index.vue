<script setup lang="ts">
import { characters } from "@/composables/useCharacters";

import Character from "@/components/Characters/Character/index.vue";
</script>

<template>
  <section>
    <ul class="characters">
      <Character
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </ul>
  </section>
</template>

<style scoped>
.characters {
  background-color: var(--background-color-secondary);
  padding: 4rem 2rem;
}

ul {
  display: grid;
  grid-gap: 2rem;
  gap: 2rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  ul {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: 1280px) {
  .characters {
    padding: 4rem;
  }

  ul {
    grid-template-columns: repeat(7, 1fr);
  }
}
</style>
