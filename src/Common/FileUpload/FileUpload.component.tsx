import React from 'react';

import { Container } from '@style';
import { useDropzone } from 'react-dropzone';

import { IFileUpload } from './FileUpload';
import { UploadInputStyle } from './FileUpload.style';

export const FileUpload: React.FC<IFileUpload> = ({ accept, onDropAccepted, onDropRejected }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: accept,
    onDropAccepted: onDropAccepted,
    onDropRejected: onDropRejected,
  });
  return (
    <Container component={'section'} direction="column" sx={{ flex: '1 1 100%' }}>
      <UploadInputStyle {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop files here, or click to select files</p>
      </UploadInputStyle>
      <div style={{ flex: 4, display: 'flex' }}></div>
    </Container>
  );
};
