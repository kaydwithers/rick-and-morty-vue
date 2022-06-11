import { ref } from "vue";
import { API_URL } from "../lib/const";

export const character = ref(null);
export const characters = ref([]);
export const currentPage = ref(1);
export const error = ref(null);
export const isCharacterLoading = ref(false);
export const isCharactersLoading = ref(false);

/**
 * Returns a character API response.
 *
 * @param {string} characterId - The characterId.
 * @return {promise}
 */
export function getCharacter(characterId: string) {
  isCharacterLoading.value = true;
  error.value = null;

  fetch(API_URL + characterId)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
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
 * Returns a characters API response.
 *
 * @param {string} param - The API url param.
 * @return {promise}
 */
export function getCharacters(param = "") {
  isCharactersLoading.value = true;
  error.value = null;

  fetch(API_URL + param)
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
}

/**
 * Updates the page.
 */
export const getUpdatedPage = (subtraction = false) => {
  subtraction ? (currentPage.value -= 1) : (currentPage.value += 1);
  getCharacters(`?page=${currentPage.value}`);
};
