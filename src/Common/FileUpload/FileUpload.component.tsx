import React from 'react';

import { Container } from '@style';
import { useDropzone } from 'react-dropzone';

import { IFileUpload } from './FileUpload';
import { Item } from './Item';

export const FileUpload: React.FC<IFileUpload> = ({ accept }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
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
      <div
        {...getRootProps({ className: 'dropzone' })}
        style={{
          flex: 1,
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

      <div style={{ flex: 4, display: 'flex' }}>
        {/* {acceptedFiles.map((file) => {
          return <Item file={file} key={file.name} fileType={fileType} />;
        })} */}
      </div>
    </Container>
  );
};
