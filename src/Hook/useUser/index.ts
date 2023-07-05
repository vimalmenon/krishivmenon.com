import React from 'react';

import { useCommonApiContext, useCommonContext } from '@context';
import { apis } from '@data';
import { IGenericMethod, IProfile } from '@types';

export const useUser: IGenericMethod = () => {
  const { setProfile } = useCommonContext();
  const { makeApiCall } = useCommonApiContext();
  const ref = React.useRef<boolean>(true);
  React.useEffect(() => {
    if (ref.current) {
      makeApiCall<IProfile>(apis.getProfile()).then((data) => {
        setProfile(data);
      });
      ref.current = false;
    }
  }, []);
};
