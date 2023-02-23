import { StorageKey } from '@constant';
import { useCommonContext } from '@context';
import { IGenericMethod, IGenericParam, StorageKeyType } from '@types';

import { ISaveStorage, IUseCommon } from './useCommon';

export const useCommon = (): IUseCommon => {
  const { storage, setStorage, theme } = useCommonContext();
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
  const switchTheme: IGenericMethod = () => {
    saveStorage('theme', theme === 'dark' ? 'light' : 'dark');
    // setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return {
    removeStorage,
    saveStorage,
    getStorage,
    switchTheme,
  };
};
