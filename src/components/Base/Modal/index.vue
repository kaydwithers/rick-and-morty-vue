<script setup lang="ts">
import {
  character,
  error,
  isCharacterLoading,
} from "@/composables/useCharacters";
import { closeModals } from "@/composables/useModals";

import Episodes from "@/components/Episodes/index.vue";
import Loading from "@/components/Base/Loading/index.vue";

/**
 * Handle the click of the close button.
 */
const handleClose = () => {
  closeModals();
};
</script>

<template>
  <div
    class="modal"
    aria-labelledby="modal-title"
    aria-modal="true"
    role="dialog"
  >
    <div class="modal__overlay" @click="handleClose" />

    <div class="modal__content">
      <button class="close" title="Close modal" @click="handleClose">✖</button>

      <Loading v-if="isCharacterLoading" />

      <p v-else-if="!isCharacterLoading && error" class="error">
        Something went wrong. Please try again.
      </p>

      <p v-else-if="!isCharacterLoading && !character" class="error">
        No matching character found.
      </p>

      <template v-else>
        <div v-if="character">
          <div class="image">
            <img :alt="character.name" :src="character.image" />
          </div>

          <div class="heading">
            <h2 id="modal-title">{{ character.name }}</h2>
          </div>

          <div class="paragraph">
            <p><strong>Species:</strong> {{ character.species }}</p>
            <p><strong>Location:</strong> {{ character.location.name }}</p>
            <p><strong>Status:</strong> {{ character.status }}</p>
          </div>

          <Episodes />
        </div>
      </template>
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
  margin-left: 1rem;
  margin-right: 1rem;
  min-height: 50%;
  padding-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 4rem;
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

.modal__content .image {
  aspect-ratio: 1 / 1;
  background-color: var(--background-color-tertiary);
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  width: 60%;
}

.modal__content img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 100%;
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

  .modal__content .image {
    width: 40%;
  }
}
</style>
