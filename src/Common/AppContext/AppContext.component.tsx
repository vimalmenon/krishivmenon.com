import React from 'react';

import { ReactChildren } from '@types';

import { Context, initialValue } from './AppContext.service';

export const AppContext: React.FC<ReactChildren> = ({ children }) => {
  return <Context.Provider value={initialValue}>{children}</Context.Provider>;
};
