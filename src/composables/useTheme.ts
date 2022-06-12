import { ref } from "vue";

export const theme = ref("");

/**
 * Set the theme.
 *
 * @param {string} string - The theme to add.
 */
export const setTheme = (string: string) => {
  theme.value = string;
  string ? (document.body.className = string) : (document.body.className = "");
};
