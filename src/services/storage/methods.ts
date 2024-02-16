import { StorageKeys } from "./keys";

const storage = {
  set(key: StorageKeys, value: string | number | boolean | null | Record<any, any>) {
    localStorage.setItem(key, JSON.stringify(value));

    return true;
  },
  get<TValue = unknown>(key: StorageKeys): TValue | null {
    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : value;
  },
  remove(key: StorageKeys) {
    localStorage.removeItem(key);
  },
};

export default storage;
