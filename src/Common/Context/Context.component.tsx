import React from 'react';

import { ReactChildren } from '@types';

import { Context as AppContext } from './Context.service';

export const Context: React.FC<ReactChildren> = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
