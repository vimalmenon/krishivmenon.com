import React from 'react';

import { AuthStatus } from '@constant';
import { ThemeType, IProfile } from '@types';

export interface IAppProvider {
  theme: ThemeType;
  apiCount: number;
  drawerOpen: boolean;
  authStatus: AuthStatus;
  profile: IProfile | null;
  storage: Record<string, string>;
  setApiCount: React.Dispatch<React.SetStateAction<number>>;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthStatus: React.Dispatch<React.SetStateAction<AuthStatus>>;
  setProfile: React.Dispatch<React.SetStateAction<IProfile | null>>;
  setStorage: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}
