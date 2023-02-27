import { ENV } from '@constant';
import { IGenericReturn, IApi, INotes, IFolder, AnyType, IProfile } from '@types';

import { IApiStorageApi, IApiS3Folder, IApiNote, IUploadToS3 } from './apis';

export const getBaseUrl: IGenericReturn<string> = () => {
  return `${ENV.API_URL}${ENV.API_VERSION}`;
};
export const Apis = {
  S3Drive: 'drive/{folder}',
  S3DriveFile: 'drive/{folder}/{fileName}',
  Notes: 'notes',
  Note: 'notes/{id}',
  Folders: 'folders',
  Folder: 'folders/{id}',
  FolderParent: 'folders/parent/{id}',
  FolderData: 'folders/folder_data/{id}',
  Me: '/me',
};

export const createFormData = <T>(body: T): FormData => {
  const result = new FormData();
  if (body) {
    Object.keys(body).forEach((data) => {
      result.append(data, (body as AnyType)[data]);
    });
  }
  return result;
};

export const apis = {
  uploadToS3: function (folder: string, data: IUploadToS3): IApi<FormData> {
    const url = Apis.S3Drive.replace('{folder}', folder);
    return {
      url,
      method: 'POST',
      data: createFormData<IUploadToS3>(data),
      params: {
        code: '3',
      },
    };
  },
  deleteFromS3: function ({ folder, fileName }: IApiStorageApi): IApi {
    const url = Apis.S3DriveFile.replace('{folder}', folder).replace('{fileName}', fileName);
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
  addNote: function (data: INotes): IApi<INotes> {
    const url = Apis.Notes;
    return {
      url,
      method: 'POST',
      data,
    };
  },
  updateNote: function (data: INotes): IApi<INotes> {
    const url = Apis.Note.replace('{id}', data.id || '');
    return {
      url,
      method: 'PUT',
      data,
    };
  },
  deleteNote: function (id: string): IApi {
    const url = Apis.Note.replace('{id}', id);
    return {
      url,
      method: 'DELETE',
      params: {
        code: '3',
      },
    };
  },
  createFolder: function (data: IFolder): IApi {
    const url = Apis.Folders;
    return {
      url,
      method: 'POST',
      data,
      params: {
        code: '3',
      },
    };
  },
  deleteFolder: function ({ id }: IApiNote): IApi {
    const url = Apis.Folder.replace('{id}', id);
    return {
      url,
      method: 'DELETE',
      params: {
        code: '3',
      },
    };
  },
  updateFolderData: function ({ id }: IApiNote, data: IFolder): IApi<IFolder> {
    const url = Apis.FolderData.replace('{id}', id);
    return {
      url,
      method: 'PUT',
      data,
      params: {
        code: '3',
      },
    };
  },
  getFolderByParent: function ({ id }: IApiNote): IApi {
    const url = Apis.FolderParent.replace('{id}', id);
    return {
      url,
      method: 'GET',
    };
  },
  getProfile: function (): IApi {
    const url = Apis.Me;
    return {
      url,
      method: 'GET',
    };
  },
  updateProfile: function (data: IProfile): IApi {
    const url = Apis.Me;
    return {
      url,
      data,
      method: 'POST',
    };
  },
};
