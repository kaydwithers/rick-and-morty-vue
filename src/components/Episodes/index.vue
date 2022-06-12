<script setup lang="ts">
import { ref } from "vue";
import { characterEpisodes } from "@/composables/useCharacters";

import Button from "@/components/Base/Button/index.vue";

const isExpanded = ref(false);

/**
 * Handle the click of the accordion button.
 */
const handleAccordion = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <Button :aria-expanded="isExpanded" @click="handleAccordion">
    Episodes <span v-if="isExpanded">☝️</span><span v-else>👇</span>
  </Button>

  <transition name="fade">
    <div class="episodes" v-show="isExpanded">
      <p>
        <strong>Episodes: </strong>
        <span v-for="(episode, index) in characterEpisodes" :key="index">
          {{
            `${episode.name}${
              index === characterEpisodes.length - 1 ? `.` : `, `
            }`
          }}
        </span>
      </p>
    </div>
  </transition>
</template>

<style scoped>
p {
  margin-top: 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
