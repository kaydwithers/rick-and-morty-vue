import { ref } from "vue";
import { useCharacters } from "./useCharacters";

const { getCharacter } = useCharacters();

const isCharacterModalOpen = ref(false);

export const useModals = () => {
  /**
   * Closes the modal.
   */
  const closeModals = () => {
    isCharacterModalOpen.value = false;
  };

  /**
   * Opens the character modal.
   *
   * @param {number} characterId - The id of the character.
   */
  const openCharacterModal = (characterId: number) => {
    getCharacter(characterId);
    isCharacterModalOpen.value = true;
  };

  return {
    closeModals,
    isCharacterModalOpen,
    openCharacterModal,
  };
};
