import React from 'react';

import { useCommonLocalStorage } from '@context';
import { ReactChildren, AnyType } from '@types';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';

import { IUser } from './AuthProvider';
import { AuthProviderContext, initialValue } from './AuthProvider.service';

export const AuthProvider: React.FC<ReactChildren> = ({ children }) => {
  const [accessToken, setAccessToken] = React.useState<string | null>(initialValue.accessToken);
  const [idToken, setIdToken] = React.useState<string | null>(initialValue.idToken);
  const [user, setUser] = React.useState<IUser | null>(initialValue.user);
  const { storage, saveStorage } = useCommonLocalStorage();
  const router = useRouter();
  React.useEffect(() => {
    const { hash } = window.location;

    if (hash) {
      const parsedHash = new URLSearchParams(
        hash.substring(1) // skip the first char (#)
      );

      if (parsedHash.get('access_token')) {
        saveStorage('accessToken', parsedHash.get('access_token') || '');
      }
      if (parsedHash.get('id_token')) {
        saveStorage('idToken', parsedHash.get('id_token') || '');
      }
      if (parsedHash.get('state')) {
        router.replace(parsedHash.get('state') as string);
      }
    }
  }, []);
  React.useEffect(() => {
    if (storage && storage['idToken']) {
      setIdToken(storage['idToken']);
    }
  }, [storage]);
  React.useEffect(() => {
    if (storage && storage['accessToken']) {
      setAccessToken(storage['accessToken']);
    }
  }, [storage]);
  React.useEffect(() => {
    if (idToken) {
      const value = jwtDecode(idToken) as AnyType;
      setUser({
        profile: value['picture'],
        email: value['email'],
        name: value['given_name'],
      });
    }
  }, [idToken]);
  return (
    <AuthProviderContext.Provider value={{ accessToken, idToken, user }}>
      {children}
    </AuthProviderContext.Provider>
  );
};
