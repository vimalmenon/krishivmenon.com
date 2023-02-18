import { IGenericParam } from '@types';

export interface ILocalStorageProvider {
  storage: Record<string, string>;
  setStorage: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export type StorageKeyType =
  | 'theme'
  | 'refreshToken'
  | 'idToken'
  | 'userProfile'
  | 'userEmail'
  | 'userName'
  | 'tokenExpiry';

export type ISaveStorage = (key: StorageKeyType, value: string) => void;

export interface IUseCommonLocalStorage {
  saveStorage: ISaveStorage;
  getStorage: <T>(key: StorageKeyType) => T;
  removeStorage: IGenericParam<StorageKeyType>;
}
