import React from 'react';

import { AuthStatus } from '@constant';
import { ThemeType, IProfile } from '@types';

export interface IAppProvider {
  theme: ThemeType;
  drawerOpen: boolean;
  authStatus: AuthStatus;
  profile: IProfile | null;
  storage: Record<string, string>;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthStatus: React.Dispatch<React.SetStateAction<AuthStatus>>;
  setProfile: React.Dispatch<React.SetStateAction<IProfile | null>>;
  setStorage: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}
