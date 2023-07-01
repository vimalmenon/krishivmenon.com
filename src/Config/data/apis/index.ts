import { ENV } from '@constant';
import { IGenericReturn, IApi, INotes, IFolder, AnyType, IProfile, IFile } from '@types';

import { IApiStorageApi, IApiS3Folder, IApiNote, IUploadToS3, IApiS3FolderWithData } from './apis';

export const getBaseUrl: IGenericReturn<string> = () => {
  return `${ENV.API_URL}${ENV.API_VERSION}`;
};

export const getApiUploadBaseUrl: IGenericReturn<string> = () => {
  return ENV.FILE_UPLOAD_API;
};
export const Apis = {
  S3Drive: 'drive/{folder}',
  S3FileConvert: 'convert',
  S3DriveFile: 'drive/{folder}/{fileName}',
  S3DriveUpload: '{folder}',
  S3MoveFiles: '/drive/directory/{folder}',
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
    const url = Apis.S3DriveUpload.replace('{folder}', folder);
    return {
      baseURL: getApiUploadBaseUrl(),
      url,
      method: 'PUT',
      data: createFormData<IUploadToS3>(data),
      params: {
        code: '3',
      },
    };
  },
  convertHeicFileToJpeg: function (data: IFile): IApi<FormData> {
    const url = Apis.S3FileConvert;
    return {
      baseURL: getApiUploadBaseUrl(),
      url,
      method: 'PUT',
      data: createFormData<IFile>(data),
      params: {
        code: '3',
      },
    };
  },
  deleteFromS3: function ({ folder, fileName }: IApiStorageApi): IApi {
    const url = Apis.S3DriveFile.replace('{folder}', folder).replace('{fileName}', fileName);
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'DELETE',
      params: {
        code: '3',
      },
    };
  },
  getFilesFromS3: function ({ folder }: IApiS3Folder): IApi {
    const url = Apis.S3Drive.replace('{folder}', folder);
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'GET',
    };
  },
  updateFileFromS3: function ({ folder, data }: IApiS3FolderWithData): IApi {
    const url = Apis.S3Drive.replace('{folder}', folder);
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'PUT',
      data,
      params: {
        code: '3',
      },
    };
  },
  moveFileToFolder: function ({ folder, data }: IApiS3FolderWithData): IApi<IFile> {
    const url = Apis.S3MoveFiles.replace('{folder}', folder);
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'PUT',
      data,
      params: {
        code: '3',
      },
    };
  },
  getNotes: function (): IApi {
    const url = Apis.Notes;
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'GET',
    };
  },
  addNote: function (data: INotes): IApi<INotes> {
    const url = Apis.Notes;
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'POST',
      data,
    };
  },
  updateNote: function (data: INotes): IApi<INotes> {
    const url = Apis.Note.replace('{id}', data.id || '');
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'PUT',
      data,
    };
  },
  deleteNote: function (id: string): IApi {
    const url = Apis.Note.replace('{id}', id);
    return {
      baseURL: getBaseUrl(),
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
      baseURL: getBaseUrl(),
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
      baseURL: getBaseUrl(),
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
      baseURL: getBaseUrl(),
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
      baseURL: getBaseUrl(),
      url,
      method: 'GET',
    };
  },
  getProfile: function (): IApi {
    const url = Apis.Me;
    return {
      baseURL: getBaseUrl(),
      url,
      method: 'GET',
    };
  },
  updateProfile: function (data: IProfile): IApi {
    const url = Apis.Me;
    return {
      baseURL: getBaseUrl(),
      url,
      data,
      method: 'POST',
    };
  },
};
