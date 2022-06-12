import { ref } from "vue";
import { getCharacter } from "./useCharacters";

export const isCharacterModalOpen = ref(false);

/**
 * Closes the modal.
 */
export function closeModals() {
  isCharacterModalOpen.value = false;
}

/**
 * Opens the character modal.
 *
 * @param {number} characterId - The id of the character.
 */
export function openCharacterModal(characterId: number) {
  getCharacter(characterId);
  isCharacterModalOpen.value = true;
}
