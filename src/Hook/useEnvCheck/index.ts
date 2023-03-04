import React from 'react';

import { ENV } from '@constant';
import { IGenericMethod } from '@types';
import { BoundaryError } from '@utility';

export const useEnvCheck: IGenericMethod = () => {
  React.useEffect(() => {
    for (const value of Object.values(ENV)) {
      if (!value) {
        throw new BoundaryError('Env values missing', true);
      }
    }
  }, []);
};
