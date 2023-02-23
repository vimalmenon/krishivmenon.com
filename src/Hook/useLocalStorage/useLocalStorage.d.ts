import { IGenericParam, StorageKeyType } from '@types';

export interface ILocalStorageProvider {
  storage: Record<string, string>;
  setStorage: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export type ISaveStorage = (key: StorageKeyType, value: string) => void;

export interface IUseLocalStorage {
  saveStorage: ISaveStorage;
  getStorage: <T>(key: StorageKeyType) => T;
  removeStorage: IGenericParam<StorageKeyType>;
}
