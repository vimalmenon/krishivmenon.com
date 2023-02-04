export interface IApiS3Folder {
  folder: string;
}
export interface IApiStorageApi extends IApiS3Folder {
  fileName: string;
  extension: string;
  file?: File;
  fileType: string;
}

export interface IApiNote {
  id: string;
}

export interface IUploadToS3 {
  data: File;
  fileName: string;
}
