export type User = {
  email: string;
};

export type ObjectValues<T extends Record<any, any>> = T[keyof T];
