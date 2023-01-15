import React from 'react';

import { useCommonLocalStorage } from '@context';
import { ReactChildren } from '@types';

import { AuthProviderContext, initialValue } from './AuthProvider.service';

export const AuthProvider: React.FC<ReactChildren> = ({ children }) => {
  const [accessToken, setAccessToken] = React.useState<string | null>(initialValue.accessToken);
  const [idToken, setIdToken] = React.useState<string | null>(initialValue.idToken);
  const { storage } = useCommonLocalStorage();
  React.useEffect(() => {
    const { hash, origin, pathname } = window.location;
    console.log(hash);
    // if (window.location.hash) {
    //   window.location.replace(origin + pathname);
    //   console.log(window.location.hash);
    // }
    // console.log(jwtDecode("eyJraWQiOiJiaVJ1Z2ZyeDcwRzc5aXUrMCtxbmg0bVB5ajd3dmpRZTlLQUl2MEs3cnRvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjY2U4YzMzZC0xNzZmLTRhMzctYjNkZS1hZjIzNDVmYTI1ZTkiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfSHBSWjREcThFX0dvb2dsZSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9IcFJaNERxOEUiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI0MTZiazByY24yYXI1bXI2ZGYxYTNkbHA3YyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhdXRoX3RpbWUiOjE2NzM3NzI5NDcsImV4cCI6MTY3Mzc3NjU0NywiaWF0IjoxNjczNzcyOTQ3LCJqdGkiOiI5N2M1Yzc3OS04ODE3LTRjMDgtOTgxYi1jZDc5N2ExZTc3ODYiLCJ1c2VybmFtZSI6Imdvb2dsZV8xMDY1OTE3Mzg3MTIxNjYzNjY4NDgifQ.pxq3-GHDMsa8Can8gPChTEukvpS5QC5iAVdH_So7RYq5g7Ux4apJyGd3StjrHpyEzoIMasOLDW9_eguCF6xtc7obRM1PGD1idoi25kZ768aJZHcfHLkpVwx70iW6eH8qYVt5Kax3F1sGD1UR40jyqLUX313jnLM1rp682JfcudJnRlQgQdmG8Cypm_NS7sZANx3NBc71w389WdxzV_4QJH2Ijrdqwj-OlV5Gcorsind1_KYMZIvwhSvhB_cmU3eTV3lbnhdpsbBH7oSKODQsbme6_jwSlZZgKonIo49rZUJCNTaQMJvsMpSzpPCtkfPcuuhmbOuYsxIhFKE3-b3ClQ"))
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
    console.log('this is called');
  }, []);
  return (
    <AuthProviderContext.Provider value={{ accessToken, idToken }}>
      {children}
    </AuthProviderContext.Provider>
  );
};
