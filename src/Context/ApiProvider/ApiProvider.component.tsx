import { ReactChildren } from '@types';

import { useApiProvider, ApiContext } from './ApiProvider.service';

export const ApiProvider: React.FC<ReactChildren> = ({ children }) => {
  const { makeApiCall } = useApiProvider();
  return <ApiContext.Provider value={{ makeApiCall }}>{children}</ApiContext.Provider>;
};
