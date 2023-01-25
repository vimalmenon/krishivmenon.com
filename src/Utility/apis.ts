import { ENV } from '@constant';
import { IGenericReturn, IApi, IFile } from '@types';

import { IApiStorageApi, IApiS3Folder } from './utility';

export const getBaseUrl: IGenericReturn<string> = () => {
  return `${ENV.API}${ENV.API_VERSION}`;
};
export const Apis = {
  S3Storage: 'drive/{folder}',
  S3Upload: 'drive/{folder}/{fileName}.{extension}',
  Notes: 'notes',
};
export const apis = {
  uploadToS3: function ({
    folder,
    fileName,
    file,
    extension,
    fileType,
  }: IApiStorageApi): IApi<File> {
    const url = Apis.S3Upload.replace('{folder}', folder)
      .replace('{fileName}', fileName)
      .replace('{extension}', extension);
    return {
      url,
      method: 'POST',
      data: file,
      headers: {
        'Content-Type': fileType,
      },
    };
  },
  deleteFromS3: function ({ folder, fileName, extension }: IApiStorageApi): IApi {
    const url = Apis.S3Upload.replace('{folder}', folder)
      .replace('{fileName}', fileName)
      .replace('{extension}', extension);
    return {
      url,
      method: 'DELETE',
    };
  },
  getFilesFromS3: function ({ folder }: IApiS3Folder): IApi {
    const url = Apis.S3Storage.replace('{folder}', folder);
    return {
      url,
      method: 'GET',
    };
  },
};
