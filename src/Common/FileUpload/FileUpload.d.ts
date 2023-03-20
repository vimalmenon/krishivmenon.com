import { DropEvent } from 'react-dropzone';

import { IGenericMethod, IGenericParam } from '@types';

export type OnDropAcceptedType = (files: File[], event: DropEvent) => void;

export type OnConvertFileType = (file: IUploadedFile, index: number) => Promise<unknown>;

export interface IFileUpload {
  files: IUploadedFile[];
  accept: Record<string, string[]>;
  onDropAccepted: OnDropAcceptedType;
  onDeleteFile: IGenericParam<number>;
  onConvertFile: OnConvertFileType;
}
export interface IFileUploadExternal extends IFileUpload {
  showFileUploader: boolean;
  onFileSetLoading: (index: number, loading: boolean) => void;
  setShowFileUploader: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IUploadedFile {
  loading: boolean;
  file: File;
  label: string;
  message?: string;
  status: 'accepted' | 'rejected';
  isFormatSupported: boolean;
}

export interface IFileUploadedItem {
  file: IUploadedFile;
  onDelete: IGenericMethod;
  index: number;
  onConvertFile: OnConvertFileType;
}

export interface IUseFileUploadHook {
  files: IUploadedFile[];
  showFileUploader: boolean;
  clearFiles: IGenericMethod;
  onDropAccepted: OnDropAcceptedType;
  onDeleteFile: IGenericParam<number>;
  onConvertFile: OnConvertFileType;
  onFileSetLoading: (index: number, loading: boolean) => void;
  setShowFileUploader: React.Dispatch<React.SetStateAction<boolean>>;
}
