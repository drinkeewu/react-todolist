//localStorage存储object类型的封装
export const storage = {
  setJSON: (key, value = {}) => {
    const result = JSON.stringify(value);
    localStorage.setItem(key, result);
  },

  getJSON: key => {
    const cache = localStorage.getItem(key);
    const result =
      // eslint-disable-next-line no-eval
      (cache && typeof eval(cache) === "object" && JSON.parse(cache)) || null;
    return result;
  }
};
