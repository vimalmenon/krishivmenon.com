import React from 'react';

import { ENV } from '@constant';
import { ReactChildren } from '@types';

export const EnvCheck: React.FC<ReactChildren> = ({ children }) => {
  React.useEffect(() => {
    for (const value of Object.values(ENV)) {
      if (!value) {
        throw new Error('Env values missing');
      }
    }
  }, []);
  return <>{children}</>;
};
