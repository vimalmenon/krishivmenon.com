import React from 'react';

import { FileType } from '@constant';
import { useCommonApiContext } from '@context';
import { apis } from '@utility';
import { getUid } from '@utility';
import { useDropzone } from 'react-dropzone';

export const FileUpload: React.FC<any> = ({ saveFile }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const { makeApiCall } = useCommonApiContext();
  React.useEffect(() => {
    console.log(acceptedFiles);
    acceptedFiles.map((file) => {
      const extension = FileType[file.type];
      makeApiCall(
        apis.uploadToS3({
          folder: 'images',
          fileName: getUid(),
          file: file,
          extension,
          imageType: file.type,
        })
      );
    });
  }, [acceptedFiles]);
  return (
    <div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop some files here, or click to select files</p>
      </div>
      <div></div>
    </div>
  );
};
