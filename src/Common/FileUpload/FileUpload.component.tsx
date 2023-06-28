import React from 'react';

import { useDropzone } from 'react-dropzone';

import { AcceptVideo, AcceptImages } from '@constant';
import { Container } from '@style';

import { IFileUpload } from './FileUpload';
import { UploadInputStyle } from './FileUpload.style';
import { FileUploadedItem } from './FileUploadedItem.component';

export const FileUpload: React.FC<IFileUpload> = ({
  files,
  onDeleteFile,
  onConvertFile,
  onDropAccepted,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { ...AcceptVideo, ...AcceptImages },
    onDropAccepted: onDropAccepted,
  });
  return (
    <Container component={'section'} direction="column" sx={{ flex: '1 1 100%' }}>
      <UploadInputStyle {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop files here, or click to select files</p>
      </UploadInputStyle>

      <div style={{ flex: 4, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {files.map((file, key) => {
          return (
            <FileUploadedItem
              key={file.label}
              file={file}
              onDelete={() => onDeleteFile(key)}
              onConvertFile={onConvertFile}
              index={key}
            />
          );
        })}
      </div>
    </Container>
  );
};
