import { ObjectValues } from "../../types/models";

export const STORAGE_KEYS = {
  USER: "user",
} as const;
export type StorageKeys = ObjectValues<typeof STORAGE_KEYS>;
