import React from 'react';

import axios from 'axios';

import { useApiCount } from '@hook';
import { IApi, IBaseResponse, IGenericReturn } from '@types';
import { NotImplemented } from '@utility';

import { IUseApiProvider, IAlert, IUseApiProviderExposed } from './ApiProvider';
import { useCommonAuthProvider } from '../AuthProvider';

export const useApiProvider: IGenericReturn<IUseApiProvider> = () => {
  const { idToken } = useCommonAuthProvider();
  const { addApiCount, reduceApiCount } = useApiCount();
  const [alert, setAlert] = React.useState<IAlert | null>(null);
  const instance = React.useMemo(
    () =>
      axios.create({
        headers: {
          Authorization: idToken || '',
        },
      }),
    [idToken]
  );
  function makeApiCall<K, T>(value: IApi<T>): Promise<K> {
    addApiCount();
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
        throw new Error(result.message);
      })
      .finally(() => {
        reduceApiCount();
      });
  }
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
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
