import React from 'react';

import { ReactChildren } from '@types';

import { Context } from './AppContext.service';

export const AppContext: React.FC<ReactChildren> = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
