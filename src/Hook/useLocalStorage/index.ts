import { StorageKey } from '@constant';
import { useCommonContext } from '@context';
import { IGenericParam, StorageKeyType } from '@types';

import { ISaveStorage, IUseLocalStorage } from './useLocalStorage';

export const LocalStorage = (): IUseLocalStorage => {
  const { storage, setStorage } = useCommonContext();
  const saveStorage: ISaveStorage = (key, value) => {
    storage[key] = value;
    localStorage.setItem(StorageKey, JSON.stringify(storage));
    setStorage(storage);
  };
  const getStorage = <T>(key: StorageKeyType): T => {
    return storage[key] as T;
  };
  const removeStorage: IGenericParam<StorageKeyType> = (key) => {
    delete storage[key];
    localStorage.setItem(StorageKey, JSON.stringify(storage));
    setStorage(storage);
  };
  return {
    removeStorage,
    saveStorage,
    getStorage,
  };
};
