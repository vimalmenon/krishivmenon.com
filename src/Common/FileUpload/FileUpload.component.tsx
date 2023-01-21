import React from 'react';

import { getUid } from '@utility';
import { useDropzone } from 'react-dropzone';

import { IFileUpload } from './FileUpload';
import { Item } from './Item';

export const FileUpload: React.FC<IFileUpload> = ({ fileType }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  return (
    <div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop some files here, or click to select files</p>
      </div>
      <div>
        {acceptedFiles.map((file) => {
          return <Item file={file} uid={getUid()} key={file.name} fileType={fileType} />;
        })}
      </div>
    </div>
  );
};
