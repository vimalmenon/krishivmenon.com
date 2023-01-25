import { StorageFileType, IGenericMethod } from '@types';

export interface IItem {
  file: File;
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
  onDelete: IGenericMethod;
};
