export interface ILocalStorageProvider {
  storage: Record<string, string>;
  setStorage: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export type ISaveStorage = (key: string, value: string) => void;

export interface IUseCommonLocalStorage {
  storage: Record<string, string>;
  saveStorage: ISaveStorage;
}
