import { ref } from "vue";
import { API_URL } from "@/lib/const";

import type { CharacterInterface } from "@/interfaces/characterInterface";
import type { EpisodeInterface } from "@/interfaces/episodeInterface";

export const character = ref<CharacterInterface>();
export const characterEpisodes = ref(Array<EpisodeInterface>());
export const characters = ref(Array<CharacterInterface>());
export const currentPage = ref(1);
export const error = ref(null);
export const isCharacterLoading = ref(false);
export const isCharactersLoading = ref(false);
export const isCharacterEpisodesLoading = ref(false);

/**
 * Returns a characters API response.
 *
 * @param {string} param - The API url param.
 * @returns {promise}
 */
export const getCharacters = (param = "") => {
  isCharactersLoading.value = true;
  error.value = null;

  fetch(`${API_URL}/character/${param}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      isCharactersLoading.value = false;
      characters.value = data.results;
    })
    .catch((error) => {
      console.error(`Failed getCharacters(): ${error}`);
      isCharactersLoading.value = false;
      error.value = error;
    });
};

/**
 * Returns a character API response.
 *
 * @param {number} characterId - The character Id.
 * @returns {promise}
 */
export const getCharacter = (characterId: number) => {
  isCharacterLoading.value = true;
  error.value = null;

  fetch(`${API_URL}/character/${characterId}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      characterEpisodes.value = [];
      data.episode.forEach((episode: string) => {
        getCharacterEpisode(episode);
      });
      isCharacterLoading.value = false;
      character.value = data;
    })
    .catch((error) => {
      console.error(`Failed getCharacter(): ${error}`);
      isCharacterLoading.value = false;
      error.value = error;
    });
};

/**
 * Returns the episode name.
 *
 * @param {string} episode - The API episode URL.
 * @returns {promise}
 */
export const getCharacterEpisode = (episode: string) => {
  isCharacterEpisodesLoading.value = true;
  error.value = null;

  fetch(`${episode}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      isCharacterEpisodesLoading.value = false;
      characterEpisodes.value.push({ name: data.name });
    })
    .catch((error) => {
      console.error(`Failed getCharacterEpisode(): ${error}`);
      isCharacterEpisodesLoading.value = false;
      error.value = error;
    });
};

/**
 * Updates the page.
 */
export const getUpdatedPage = (subtraction = false) => {
  subtraction ? (currentPage.value -= 1) : (currentPage.value += 1);
  getCharacters(`?page=${currentPage.value}`);
};
