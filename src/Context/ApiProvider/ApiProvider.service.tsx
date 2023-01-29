import React from 'react';

import { IApi, IBaseResponse, IGenericReturn } from '@types';
import { getBaseUrl, NotImplemented } from '@utility';
import axios from 'axios';

import { IUseApiProvider, IAlert, IUseApiProviderExposed } from './ApiProvider';

const baseURL = getBaseUrl();

const instance = axios.create({
  baseURL: baseURL,
});

export const useApiProvider: IGenericReturn<IUseApiProvider> = () => {
  const [alert, setAlert] = React.useState<IAlert | null>(null);
  function makeApiCall<K, T>(value: IApi<T>): Promise<K> {
    return instance
      .request<IBaseResponse<K>>(value)
      .then((result) => result.data)
      .then((result) => {
        if (result.code >= 1) {
          setAlert({
            severity: 'success',
            message: result.message,
          });
        }
        return result.data;
      })
      .catch((result) => {
        if (result.code >= 2) {
          setAlert({
            severity: 'error',
            message: result.message,
          });
        }
        return result.data;
      });
  }
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(null);
  };

  return {
    makeApiCall,
    handleClose,
    alert,
  };
};

const initialValue: IUseApiProvider = {
  makeApiCall: NotImplemented,
  handleClose: NotImplemented,
  alert: null,
};

export const ApiContext = React.createContext<IUseApiProvider>(initialValue);

export const useCommonApiContext: IGenericReturn<IUseApiProviderExposed> = () => {
  const { makeApiCall } = React.useContext(ApiContext);
  return {
    makeApiCall,
  };
};
