import React from 'react';

import { IGenericMethod, IGenericParam, IGenericReturn } from '@types';

import {
  IUploadedFile,
  OnDropAcceptedType,
  IUseFileUploadHook,
  OnConvertFileType,
} from './FileUpload';

export const useFileUpload: IGenericReturn<IUseFileUploadHook> = () => {
  const [files, setFiles] = React.useState<IUploadedFile[]>([]);
  const [showFileUploader, setShowFileUploader] = React.useState<boolean>(false);
  const onDropAccepted: OnDropAcceptedType = (acceptedFiles) => {
    setFiles([
      ...files,
      ...acceptedFiles.map<IUploadedFile>((file) => {
        return {
          isFormatSupported: file.type !== 'image/heic',
          loading: false,
          status: 'accepted',
          file: file,
          label: file.name,
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

  const onConvertFile: OnConvertFileType = async (value, index) => {
    let newFiles = [...files];
    newFiles.splice(index, 1, {
      ...value,
      loading: true,
    });
    setFiles([...newFiles]);
    const heic2any = (await import('heic2any')).default;
    // convert to JPG - response is blob
    const result = await heic2any({
      blob: value.file,
      toType: 'image/jpeg',
      quality: 0.9,
    });
    const blob = Array.isArray(result) ? result[0] : result;
    newFiles = [...files];
    newFiles.splice(index, 1, {
      isFormatSupported: true,
      loading: false,
      status: 'accepted',
      file: new File([blob], value.file.name, { type: 'image/jpeg' }),
      label: value.file.name,
    });
    setFiles([...newFiles]);
  };
  return {
    files,
    clearFiles,
    onDeleteFile,
    onConvertFile,
    onDropAccepted,
    onFileSetLoading,
    showFileUploader,
    setShowFileUploader,
  };
};
