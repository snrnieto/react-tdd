export const storage = {
  save({ key, value }: { key: string; value: string }) {
    return localStorage.setItem(key, value);
  },
  get({ key }: { key: string }) {
    return localStorage.getItem(key);
  },
};
