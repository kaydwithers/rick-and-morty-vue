<script setup lang="ts">
import { openCharacterModal } from "@/composables/useModals";

const props = defineProps<{
  character?: object;
}>();

/**
 * Handle the click of a character selection.
 */
const handleCharacterSelect = () => {
  openCharacterModal(props.character.id);
};
</script>

<template>
  <li class="character">
    <button @click="handleCharacterSelect">
      <img :alt="character.name" :src="character.image" />
      <p>{{ character.name }}</p>
    </button>
  </li>
</template>

<style scoped>
button {
  align-items: center;
  background-color: var(--background-color-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  transition-duration: 300ms;
  transition-property: transform;
  width: 100%;
}

button:hover {
  transform: scaleX(1.05) scaleY(1.05);
}

img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 100%;
}

p {
  align-items: center;
  display: flex;
  height: 100%;
  padding: 1rem 0.5rem;
}
</style>
