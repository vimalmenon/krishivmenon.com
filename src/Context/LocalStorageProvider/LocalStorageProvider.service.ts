import React from 'react';

import { StorageKey } from '@constant';
import { IGenericReturn } from '@types';
import { NotImplemented } from '@utility';

import {
  IUseCommonLocalStorage,
  ISaveStorage,
  ILocalStorageProvider,
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
  const getStorage = <T>(key: string): T => {
    return storage[key] as T;
  };
  return {
    saveStorage,
    getStorage,
  };
};
