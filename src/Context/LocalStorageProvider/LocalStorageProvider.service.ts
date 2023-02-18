import React from 'react';

import { StorageKey } from '@constant';
import { IGenericParam, IGenericReturn } from '@types';
import { NotImplemented } from '@utility';

import {
  IUseCommonLocalStorage,
  ISaveStorage,
  ILocalStorageProvider,
  StorageKeyType,
} from './LocalStorageProvider';

export const initialValue: ILocalStorageProvider = {
  storage: {},
  setStorage: NotImplemented,
};

export const LocalStorageContext = React.createContext<ILocalStorageProvider>(initialValue);

export const useCommonLocalStorage: IGenericReturn<IUseCommonLocalStorage> = () => {
  const { storage, setStorage } = React.useContext<ILocalStorageProvider>(LocalStorageContext);

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
