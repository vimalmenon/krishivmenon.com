import React from 'react';

import { Container } from '@style';
import { useDropzone } from 'react-dropzone';

import { IFileUpload } from './FileUpload';
import { UploadInputStyle } from './FileUpload.style';
import { Item } from './Item';

export const FileUpload: React.FC<IFileUpload> = ({ accept }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: accept,
    onDropAccepted(files, event) {
      console.log(files);
    },
    onDropRejected(files, event) {
      console.log(files);
    },
  });
  return (
    <Container component={'section'} direction="column" sx={{ flex: '1 1 100%' }}>
      <UploadInputStyle {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop some files here, or click to select files</p>
      </UploadInputStyle>

      <div style={{ flex: 4, display: 'flex' }}>
        {/* {acceptedFiles.map((file) => {
          return <Item file={file} key={file.name} fileType={fileType} />;
        })} */}
      </div>
    </Container>
  );
};
