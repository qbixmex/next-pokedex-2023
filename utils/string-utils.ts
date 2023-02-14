/**
 * Capitalize given text
 * @returns Example: "dragon" becomes "Dragon"
 */
export const capitalize = (name: string): string => {
  return name.slice(0, 1).toUpperCase() + name.slice(1);
};