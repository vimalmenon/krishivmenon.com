export interface IApiS3Folder {
  folder: string;
}
export interface IApiStorageApi extends IApiS3Folder {
  fileName: string;
  file?: File;
}

export interface IApiNote {
  id: string;
}

export interface IUploadToS3 {
  data: File;
  name: string;
}
