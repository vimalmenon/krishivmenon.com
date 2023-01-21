import { ENV } from '@constant';
import { IGenericReturn, IApi, IFile } from '@types';

import { IApiStorageApi } from './utility';

export const getBaseUrl: IGenericReturn<string> = () => {
  return `${ENV.API}${ENV.API_VERSION}`;
};
export const Apis = {
  S3Upload: 'upload/{folder}/{fileName}.{extension}',
  S3Storage: 'directory',
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
      method: 'PUT',
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
  getAssetFromS3: function (): IApi {
    return {
      url: Apis.S3Storage,
      method: 'GET',
    };
  },
  addAssetToS3: function (data: IFile): IApi {
    return {
      url: Apis.S3Storage,
      method: 'POST',
      data,
    };
  },
  deleteAssetFromS3: function (data: IFile): IApi {
    return {
      url: Apis.S3Storage,
      method: 'DELETE',
      data,
    };
  },
  updateAssetFromS3: function (data: IFile): IApi {
    return {
      url: Apis.S3Storage,
      method: 'PUT',
      data,
    };
  },
};
