<script setup lang="ts">
import { characterEpisodes } from "@/composables/useCharacters";
import { ref } from "vue";

import Button from "../Base/Button/index.vue";

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
      <p>
        <strong>Episodes: </strong>
        <span v-for="(episodeName, index) in characterEpisodes" :key="index">
          {{
            index === characterEpisodes.length - 1
              ? `${episodeName}. `
              : `${episodeName}, `
          }}
        </span>
      </p>
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
