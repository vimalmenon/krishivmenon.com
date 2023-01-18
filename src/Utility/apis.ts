import { ENV } from '@constant';
import { IGenericReturn } from '@types';

export const getBaseUrl: IGenericReturn<string> = () => {
  return `${ENV.API}${ENV.API_VERSION}`;
};
export const apis = {};
