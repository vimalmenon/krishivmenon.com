import React from 'react';

import { IAppContext } from './AppContext';

export const initialValue: IAppContext = {
  theme: 'dark',
  isAdmin: false,
};

export const Context = React.createContext<IAppContext>(initialValue);

export const context = {};
