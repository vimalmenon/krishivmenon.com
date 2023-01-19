import { ReactChildren } from '@types';

import { useApiProvider } from './ApiProvider.service';

export const ApiProvider: React.FC<ReactChildren> = ({ children }) => {
  useApiProvider();
  return <>{children}</>;
};
