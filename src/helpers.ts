export const uppercased = (str: string): string =>
  str.replaceAll("-", "_").toUpperCase();

  
export const getKey = (haystack: Object, needle: string) => {
  let index = 0;

  Object.keys(haystack).forEach((key, idx) => {
    if (key == needle) {
      index = idx;
    }
  });
  return Object.values(haystack)[index];
};
