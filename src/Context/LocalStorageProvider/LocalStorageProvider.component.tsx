import { ReactChildren } from '@types';

import { LocalStorageContext } from './LocalStorageProvider.service';

export const LocalStorageProvider: React.FC<ReactChildren> = ({ children }) => {
  return <LocalStorageContext.Provider value={{}}>{children}</LocalStorageContext.Provider>;
};
