import { ref } from "vue";
import { API_URL } from "@/lib/const";

export const character = ref(null);
export const characterEpisodes = ref([]);
export const characters = ref([]);
export const currentPage = ref(1);
export const error = ref(null);
export const isCharacterLoading = ref(false);
export const isCharactersLoading = ref(false);
export const isCharacterEpisodesLoading = ref(false);

/**
 * Returns a characters API response.
 *
 * @param {string} param - The API url param.
 * @return {promise}
 */
export function getAllCharacters(param = "") {
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
      console.error(`Failed getAllCharacters(): ${error}`);
      isCharactersLoading.value = false;
      error.value = error;
    });
}

/**
 * Returns a character API response.
 *
 * @param {number} characterId - The character Id.
 * @return {promise}
 */
export function getCharacter(characterId: number) {
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
        getCharacterEpisodes(episode);
      });
      isCharacterLoading.value = false;
      character.value = data;
    })
    .catch((error) => {
      console.error(`Failed getCharacter(): ${error}`);
      isCharacterLoading.value = false;
      error.value = error;
    });
}

/**
 * Returns the episode name.
 *
 * @param {string} episode - The API episode URL.
 * @return {promise}
 */
export function getCharacterEpisodes(episode: string) {
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
      console.error(`Failed getCharacterEpisodes(): ${error}`);
      isCharacterEpisodesLoading.value = false;
      error.value = error;
    });
}

/**
 * Updates the page.
 */
export const getUpdatedPage = (subtraction = false) => {
  subtraction ? (currentPage.value -= 1) : (currentPage.value += 1);
  getAllCharacters(`?page=${currentPage.value}`);
};
