import React from 'react';

import { Container } from '@style';
import { useDropzone } from 'react-dropzone';

import { IFileUpload } from './FileUpload';
import { Item } from './Item';

export const FileUpload: React.FC<IFileUpload> = ({ fileType }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  return (
    <Container component={'section'} direction="column" sx={{ flex: '1 1 100%' }}>
      <div
        {...getRootProps({ className: 'dropzone' })}
        style={{
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          borderWidth: '2px',
          borderRadius: '2px',
          borderStyle: 'dashed',
          backgroundColor: '#fafafa',
          color: '#bdbdbd',
          outline: 'none',
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop some files here, or click to select files</p>
      </div>

      <div style={{ flex: 3, display: 'flex' }}>
        {acceptedFiles.map((file) => {
          return <Item file={file} key={file.name} fileType={fileType} />;
        })}
      </div>
    </Container>
  );
};
