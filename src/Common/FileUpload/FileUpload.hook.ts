import React from 'react';

import { IGenericMethod, IGenericParam, IGenericReturn } from '@types';

import {
  IUploadedFile,
  OnDropAcceptedType,
  OnDropRejectedType,
  IUseFileUploadHook,
} from './FileUpload';

export const useFileUpload: IGenericReturn<IUseFileUploadHook> = () => {
  const [files, setFiles] = React.useState<IUploadedFile[]>([]);
  const [showFileUploader, setShowFileUploader] = React.useState<boolean>(false);
  const onDropAccepted: OnDropAcceptedType = (acceptedFiles) => {
    setFiles([
      ...files,
      ...acceptedFiles.map<IUploadedFile>((file) => {
        return {
          loading: false,
          status: 'accepted',
          file: file,
          label: file.name,
        };
      }),
    ]);
  };
  const onDropRejected: OnDropRejectedType = (rejectedFiles) => {
    setFiles([
      ...files,
      ...rejectedFiles.map<IUploadedFile>((file) => {
        return {
          loading: false,
          status: 'rejected',
          file: file.file,
          label: file.file.name,
          message: file.errors[0].message,
        };
      }),
    ]);
  };
  const clearFiles: IGenericMethod = () => {
    setFiles([]);
  };
  const onDeleteFile: IGenericParam<number> = (index) => {
    files.splice(index, 1);
    setFiles([...files]);
  };
  const onFileSetLoading = (index: number, loading: boolean): void => {
    const newFiles = [...files];
    newFiles[index].loading = loading;
    setFiles(newFiles);
  };
  return {
    files,
    clearFiles,
    onDeleteFile,
    onDropRejected,
    onDropAccepted,
    onFileSetLoading,
    showFileUploader,
    setShowFileUploader,
  };
};
