import { ENV } from '@constant';
import { IGenericReturn, IApi } from '@types';

import { IApiStorageApi } from './utility';

export const getBaseUrl: IGenericReturn<string> = () => {
  return `${ENV.API}${ENV.API_VERSION}`;
};
export const Apis = {
  S3Storage: 'upload/{folder}/{fileName}.{extension}',
  Notes: 'notes',
};
export const apis = {
  uploadToS3: function <T>({ folder, fileName, file, extension }: IApiStorageApi): IApi<T> {
    const url = Apis.S3Storage.replace('{folder}', folder)
      .replace('{fileName}', fileName)
      .replace('{extension}', extension);
    return {
      url,
      method: 'PUT',
      data: file,
    };
  },
  deleteFromS3: function <T>({ folder, fileName, extension }: IApiStorageApi): IApi<T> {
    const url = Apis.S3Storage.replace('{folder}', folder)
      .replace('{fileName}', fileName)
      .replace('{extension}', extension);
    return {
      url,
      method: 'DELETE',
    };
  },
};
