import { ENV } from '@constant';
import { IGenericReturn, IApi, INotes, IFolder } from '@types';

import { IApiStorageApi, IApiS3Folder, IApiNote } from './utility';

export const getBaseUrl: IGenericReturn<string> = () => {
  return `${ENV.API}${ENV.API_VERSION}`;
};
export const Apis = {
  S3Drive: 'drive/{folder}',
  S3DriveFile: 'drive/{folder}/{fileName}.{extension}',
  Notes: 'notes',
  Note: 'notes/{id}',
  Folders: 'folders',
  Folder: 'folders/{id}',
  FolderParent: 'folders/parent/{id}',
};
export const apis = {
  uploadToS3: function ({
    folder,
    fileName,
    file,
    extension,
    fileType,
  }: IApiStorageApi): IApi<File> {
    const url = Apis.S3DriveFile.replace('{folder}', folder)
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
    const url = Apis.S3DriveFile.replace('{folder}', folder)
      .replace('{fileName}', fileName)
      .replace('{extension}', extension);
    return {
      url,
      method: 'DELETE',
    };
  },
  getFilesFromS3: function ({ folder }: IApiS3Folder): IApi {
    const url = Apis.S3Drive.replace('{folder}', folder);
    return {
      url,
      method: 'GET',
    };
  },
  getNotes: function (): IApi {
    const url = Apis.Notes;
    return {
      url,
      method: 'GET',
    };
  },
  getNote: function ({ id }: IApiNote): IApi {
    const url = Apis.Note.replace('{id}', id);
    return {
      url,
      method: 'GET',
    };
  },
  addNote: function (data: INotes): IApi<INotes> {
    const url = Apis.Notes;
    return {
      url,
      method: 'POST',
      data,
    };
  },
  deleteNote: function ({ id }: IApiNote): IApi {
    const url = Apis.Note.replace('{id}', id);
    return {
      url,
      method: 'DELETE',
    };
  },
  createFolder: function (data: IFolder): IApi {
    const url = Apis.Folders;
    return {
      url,
      method: 'POST',
      data,
    };
  },
  deleteFolder: function ({ id }: IApiNote): IApi {
    const url = Apis.Folder.replace('{id}', id);
    return {
      url,
      method: 'DELETE',
    };
  },
  getFolderByParent: function ({ id }: IApiNote): IApi {
    const url = Apis.FolderParent.replace('{id}', id);
    return {
      url,
      method: 'GET',
    };
  },
};
