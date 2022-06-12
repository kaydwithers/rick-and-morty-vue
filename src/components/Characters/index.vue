<script setup lang="ts">
import Character from "@/components/Characters/Character/index.vue";

interface inter {
  id: number;
  image: string;
  name: string;
}

const props = defineProps<{
  characters: Array<inter>;
}>();

/**
 * Returns a random character name.
 *
 * @return {String}
 */
const randomName = (): string => {
  const index = Math.floor(Math.random() * props.characters.length);
  return props.characters[index].name;
};
</script>

<template>
  <section>
    <h1>{{ randomName() }} &amp; {{ randomName() }}</h1>

    <div class="characters">
      <ul>
        <Character
          v-for="character in characters"
          :key="character.id"
          :character="character"
        />
      </ul>
    </div>
  </section>
</template>

<style scoped>
.characters {
  background-color: var(--background-color-secondary);
  padding: 4rem 2rem;
}

h1 {
  margin-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
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
