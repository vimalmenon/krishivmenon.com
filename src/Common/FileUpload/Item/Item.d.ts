import { StorageFileType } from '@types';

export interface IItem {
  file: File;
  uid: string;
  fileType: StorageFileType;
}

export type IUseItem = (
  file: File,
  uid: string,
  fileType: StorageFileType
) => {
  loading: boolean;
  isDeleted: boolean;
  extension: string;
};
