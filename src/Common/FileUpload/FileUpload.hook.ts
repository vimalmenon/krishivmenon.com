import React from 'react';

import { IGenericMethod, IGenericParam } from '@types';

import { IUploadedFile, OnDropAcceptedType, OnDropRejectedType } from './FileUpload';

export const useFileUpload = () => {
  const [files, setFiles] = React.useState<IUploadedFile[]>([]);
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
  return {
    files,
    clearFiles,
    onDeleteFile,
    onDropAccepted,
    onDropRejected,
  };
};
