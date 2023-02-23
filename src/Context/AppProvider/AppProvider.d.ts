import React from 'react';

import { ThemeType, IProfile } from '@types';

export interface IAppProvider {
  theme: ThemeType;
  drawerOpen: boolean;
  authorized: boolean;
  authorizing: boolean;
  profile: IProfile | null;
  storage: Record<string, string>;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthorizing: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<IProfile | null>>;
  setStorage: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export interface IUseCommonContext {
  theme: ThemeType;
  drawerOpen: boolean;
  authorized: boolean;
  authorizing: boolean;
  profile: IProfile | null;
  storage: Record<string, string>;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<IProfile | null>>;
  setStorage: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}
