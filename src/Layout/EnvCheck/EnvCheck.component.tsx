import React from 'react';

import { useEnvCheck } from '@hook';
import { ReactChildren } from '@types';

export const EnvCheck: React.FC<ReactChildren> = ({ children }) => {
  useEnvCheck();
  return <>{children}</>;
};
