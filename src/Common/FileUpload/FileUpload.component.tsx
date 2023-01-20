import React from 'react';

import { useCommonApiContext } from '@context';
import { apis } from '@utility';
import { useDropzone } from 'react-dropzone';

export const FileUpload: React.FC<any> = ({ saveFile }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const { makeApiCall } = useCommonApiContext();
  React.useEffect(() => {
    console.log(acceptedFiles);
    acceptedFiles.map((file) => {
      console.log(file.name.replace(/\.[^/.]+$/, ''));
      const fileExt = file.name.split('.').pop();

      console.log(
        makeApiCall(
          apis.uploadToS3({ folder: 'image', fileName: 'test.jpeg', file: file, extension: 'jpeg' })
        )
      );
    });
  }, [acceptedFiles]);

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};
