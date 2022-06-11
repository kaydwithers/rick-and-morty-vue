<script setup lang="ts">
import {
  character,
  error,
  isCharacterLoading,
} from "../../../composables/useCharacters";
import { closeModals } from "../../../composables/useModals";

import Episodes from "../../Episodes/index.vue";
import Loading from "../Loading/index.vue";

/**
 * Handle the click of the close button.
 */
const handleClose = () => {
  closeModals();
};
</script>

<template>
  <div class="modal">
    <div class="modal__overlay" @click="handleClose" />

    <div class="modal__content">
      <button class="close" @click="handleClose">✖</button>

      <Loading v-if="isCharacterLoading" />

      <p v-else-if="!isCharacterLoading && error" class="error">
        Something went wrong. Please try again.
      </p>

      <p v-else-if="!isCharacterLoading && !character" class="error">
        No matching character found.
      </p>

      <div v-else>
        <img :alt="character.name" :src="character.image" />

        <div class="heading">
          <h2>{{ character.name }}</h2>
        </div>

        <div class="paragraph">
          <p><strong>Species:</strong> {{ character.species }}</p>
          <p><strong>Location:</strong> {{ character.location.name }}</p>
          <p><strong>Status:</strong> {{ character.status }}</p>
        </div>

        <Episodes :character="character" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.error {
  margin: 4rem 2rem;
  text-align: center;
}

.modal {
  position: fixed;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
}

.modal__overlay {
  position: absolute;
  background-color: #000;
  height: 100%;
  left: 0;
  opacity: 0.5;
  width: 100%;
}

.modal__content {
  background-color: var(--background-color-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 50%;
  padding: 4rem 2rem;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 1;
}

.modal__content .close {
  cursor: pointer;
  font-size: 2rem;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
}

.modal__content img {
  aspect-ratio: 1 / 1;
  border-radius: var(--border-radius);
  object-fit: cover;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
}

.modal__content .heading {
  margin-bottom: 1rem;
}

.modal__content .paragraph {
  margin-bottom: 2rem;
}

.modal__content p {
  margin-bottom: 0.5rem;
}

.modal__content button {
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .modal__content {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}

@media (min-width: 1024px) {
  .modal__content {
    width: 35%;
  }

  .modal__content .close {
    padding: 2rem;
  }
}
</style>