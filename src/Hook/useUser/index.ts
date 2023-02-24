import React from 'react';

import { AuthStatus } from '@constant';
import { useCommonApiContext, useCommonContext } from '@context';
import { IGenericMethod, IProfile } from '@types';
import { apis } from '@utility';

export const useUser: IGenericMethod = () => {
  const { setProfile, setAuthStatus } = useCommonContext();
  const { makeApiCall } = useCommonApiContext();
  const ref = React.useRef<boolean>(true);
  React.useEffect(() => {
    if (ref.current) {
      makeApiCall<IProfile>(apis.getProfile())
        .then((data) => {
          setProfile(data);
          setAuthStatus(AuthStatus.Authorized);
        })
        .catch(() => {
          setAuthStatus(AuthStatus.UnAuthorized);
        });
      ref.current = false;
    }
  }, []);
};
