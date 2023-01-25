import React from 'react';

import { IApi, IGenericReturn } from '@types';
import { getBaseUrl, NotImplemented } from '@utility';
import axios from 'axios';

import { IUseApiProvider } from './ApiProvider';

const baseURL = getBaseUrl();

const instance = axios.create({
  baseURL: baseURL,
});

export const useApiProvider: IGenericReturn<IUseApiProvider> = () => {
  function makeApiCall<T, K>(value: IApi<T>): Promise<K> {
    return instance.request(value).then((result) => result.data);
  }
  return {
    makeApiCall,
  };
};

const initialValue: IUseApiProvider = {
  makeApiCall: NotImplemented,
};

export const ApiContext = React.createContext<IUseApiProvider>(initialValue);

export const useCommonApiContext: IGenericReturn<IUseApiProvider> = () => {
  const { makeApiCall } = React.useContext(ApiContext);
  return {
    makeApiCall,
  };
};
