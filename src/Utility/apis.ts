import { ENV } from '@constant';
import { IGenericReturn, IApi } from '@types';

export const getBaseUrl: IGenericReturn<string> = () => {
  return `${ENV.API}${ENV.API_VERSION}`;
};
export const Apis = {
  S3Storage: 'storage/{folder}/{file}',
  Notes: 'notes',
};
export const apis = {
  uploadToS3: function <T>({ folder, file }: any): IApi<T> {
    const url = Apis.S3Storage.replace('{folder}', folder).replace('{file}', file);
    return {
      url,
      method: 'PUT',
    };
  },
  deleteFromS3: function <T>({ folder, file }: any): IApi<T> {
    const url = Apis.S3Storage.replace('{folder}', folder).replace('{file}', file);
    return {
      url,
      method: 'DELETE',
    };
  },
};
