<script setup lang="ts">
import { ref } from "vue";

import Button from "../Base/Button/index.vue";

defineProps<{
  character?: object;
}>();

const isExpanded = ref(false);

/**
 * Handle the click of the accordion button.
 */
const handleAccordion = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <Button @click="handleAccordion">
    Episodes <span v-if="isExpanded">⬆</span><span v-else>⬇</span>
  </Button>

  <transition name="fade">
    <div class="episodes" v-show="isExpanded">
      <p>Episodes: {{ character.episode.length }}</p>
    </div>
  </transition>
</template>

<style scoped>
button {
  margin-bottom: 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
