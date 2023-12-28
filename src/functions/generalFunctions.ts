/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string to be capitalized.
 * @returns {string} - The capitalized string.
 */
export const toCapitalize = (str: string) => {
  if (typeof str !== "string") {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Copy element inside html, with useRef hook needed
 * @param {HTMLInputElement} input - The input string to be capitalized.
 */
export const handleCopy = (input: HTMLInputElement | null) => {
  if (input) {
    navigator.clipboard.writeText(input.innerText);
  }
};
