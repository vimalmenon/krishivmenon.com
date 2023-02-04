import { IGenericMethod, IGenericParam } from '@types';
import { DropEvent, FileRejection } from 'react-dropzone';

export type OnDropAcceptedType = (files: File[], event: DropEvent) => void;
export type OnDropRejectedType = (fileRejections: FileRejection[], event: DropEvent) => void;

export interface IFileUpload {
  files: IUploadedFile[];
  preview?: boolean;
  accept: Record<string, string[]>;
  onDropAccepted: OnDropAcceptedType;
  onDropRejected?: OnDropRejectedType;
  onDeleteFile: IGenericParam<number>;
}

export interface IUploadedFile {
  loading: boolean;
  file: File;
  label: string;
  message?: string;
  status: 'accepted' | 'rejected';
}

export interface IFileUploadedItem {
  file: IUploadedFile;
  onDelete: IGenericMethod;
}

export interface IUseFileUploadHook {
  files: IUploadedFile[];
  clearFiles: IGenericMethod;
  onDeleteFile: IGenericParam<number>;
  onDropAccepted: OnDropAcceptedType;
  onDropRejected: OnDropRejectedType;
}
