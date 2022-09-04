import { ref } from "vue";
import { API_URL } from "@/lib/const";

import type { CharacterInterface } from "@/interfaces/characterInterface";
import type { EpisodeInterface } from "@/interfaces/episodeInterface";

const character = ref<CharacterInterface>();
const characterEpisodes = ref(Array<EpisodeInterface>());
const characters = ref(Array<CharacterInterface>());
const currentPage = ref(1);
const error = ref(null);
const isCharacterLoading = ref(false);
const isCharactersLoading = ref(false);
const isCharacterEpisodesLoading = ref(false);

export const useCharacters = () => {
  /**
   * Returns a characters API response.
   *
   * @param {string} param - The API url param.
   * @returns {promise}
   */
  const getCharacters = (param = "") => {
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
  const getCharacter = (characterId: number) => {
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
  const getCharacterEpisode = (episode: string) => {
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
  const getUpdatedPage = (subtraction = false) => {
    subtraction ? (currentPage.value -= 1) : (currentPage.value += 1);
    getCharacters(`?page=${currentPage.value}`);
  };

  return {
    character,
    characterEpisodes,
    characters,
    currentPage,
    error,
    isCharacterLoading,
    isCharactersLoading,
    isCharacterEpisodesLoading,
    getCharacter,
    getCharacters,
    getCharacterEpisode,
    getUpdatedPage,
  };
};
