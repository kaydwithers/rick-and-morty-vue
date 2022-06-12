<script setup lang="ts">
import {
  characters,
  error,
  getCharacters,
  isCharactersLoading,
} from "@/composables/useCharacters";
import { isCharacterModalOpen } from "@/composables/useModals";

import Characters from "@/components/Characters/index.vue";
import Footer from "@/components/Base/Footer/index.vue";
import Header from "@/components/Base/Header/index.vue";
import Loading from "@/components/Base/Loading/index.vue";
import Modal from "@/components/Base/Modal/index.vue";

getCharacters();
</script>

<template>
  <Modal v-if="isCharacterModalOpen" />

  <Header />

  <main>
    <Loading v-if="isCharactersLoading" />

    <p v-else-if="!isCharactersLoading && error" class="error">
      Something went wrong. Please try again.
    </p>

    <p
      v-else-if="
        !isCharactersLoading && (!characters || characters.length === 0)
      "
      class="error"
    >
      No characters found.
    </p>

    <Characters v-else />
  </main>

  <Footer />
</template>

<style>
@import "./assets/main.css";

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.error {
  margin: 4rem 2rem;
  text-align: center;
}
</style>
