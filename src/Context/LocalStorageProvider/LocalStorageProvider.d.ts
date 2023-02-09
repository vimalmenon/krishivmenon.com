export interface ILocalStorageProvider {
  storage: Record<string, string>;
  setStorage: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export type ISaveStorage = (key: string, value: string) => void;
export type IGetStorage<T> = (key: string) => T;

export interface IUseCommonLocalStorage {
  saveStorage: ISaveStorage;
  getStorage: IGetStorage;
}
