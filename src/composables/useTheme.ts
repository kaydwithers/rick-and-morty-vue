import { ref } from "vue";

const theme = ref("");

export const useTheme = () => {
  /**
   * Set the theme.
   *
   * @param {string} string - The theme to add.
   */
  const setTheme = (string: string) => {
    theme.value = string;
    string
      ? (document.body.className = string)
      : (document.body.className = "");
  };

  return {
    setTheme,
    theme,
  };
};
