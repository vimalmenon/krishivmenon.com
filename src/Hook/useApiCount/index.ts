import { useCommonContext } from '@context';
import { IGenericMethod, IGenericReturn } from '@types';

import { IUseApiCount } from './UseApiCount';

export const useApiCount: IGenericReturn<IUseApiCount> = () => {
  const { setApiCount } = useCommonContext();
  const addApiCount: IGenericMethod = () => {
    setApiCount((apiCount) => ++apiCount);
  };
  const reduceApiCount: IGenericMethod = () => {
    setApiCount((apiCount) => --apiCount);
  };
  return {
    addApiCount,
    reduceApiCount,
  };
};
