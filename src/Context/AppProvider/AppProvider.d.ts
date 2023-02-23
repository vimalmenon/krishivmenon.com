import React from 'react';

import { ThemeType, IGenericMethod, IProfile } from '@types';

export interface IAppProvider {
  theme: ThemeType;
  drawerOpen: boolean;
  authorized: boolean;
  authorizing: boolean;
  profile: IProfile | null;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthorizing: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<IProfile | null>>;
}

export interface IUseCommonContext {
  theme: ThemeType;
  drawerOpen: boolean;
  authorized: boolean;
  authorizing: boolean;
  profile: IProfile | null;
  switchTheme: IGenericMethod;
  switchDrawer: IGenericMethod;
  setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<IProfile | null>>;
}
