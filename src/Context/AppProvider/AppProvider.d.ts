import React from 'react';

import { ThemeType, IProfile } from '@types';

export interface IAppProvider {
  theme: ThemeType;
  apiCount: number;
  drawerOpen: boolean;
  profile: IProfile | null;
  storage: Record<string, string>;
  setApiCount: React.Dispatch<React.SetStateAction<number>>;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<IProfile | null>>;
  setStorage: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}
