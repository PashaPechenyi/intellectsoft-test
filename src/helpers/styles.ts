import { SxProps, Theme } from "@mui/material";

type SxPropsWithTheme = SxProps<Theme>;
type TSxArray = Extract<SxPropsWithTheme, ReadonlyArray<any>>;
type TSxItem = Exclude<SxPropsWithTheme, ReadonlyArray<any>>;

export const createSxStylesList = <TKeys extends string>(
  sx: Record<TKeys, TSxItem>
): Record<TKeys, TSxItem> => sx;

export const combineSxStyles = (
  ...args: (SxPropsWithTheme | null | undefined | false)[]
): SxPropsWithTheme => {
  return args.reduce((sx: TSxArray, item) => {
    if (!item) return sx;

    if (Array.isArray(item)) return [...sx, ...item];
    return [...sx, item];
  }, []);
};
