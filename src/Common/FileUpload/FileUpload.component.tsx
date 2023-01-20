import React from 'react';

import { FileTypeMapping } from '@constant';
import { useCommonApiContext } from '@context';
import { apis } from '@utility';
import { getUid } from '@utility';
import { useDropzone } from 'react-dropzone';

import { Item } from './Item';

export const FileUpload: React.FC = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const { makeApiCall } = useCommonApiContext();
  React.useEffect(() => {
    acceptedFiles.map((file) => {
      const extension = FileTypeMapping[file.type];
      makeApiCall(
        apis.uploadToS3({
          folder: 'images',
          fileName: getUid(),
          file: file,
          extension,
          fileType: file.type,
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
      <div>
        {acceptedFiles.map((file) => {
          return <Item file={file} uid={getUid()} key={file.name} />;
        })}
      </div>
    </div>
  );
};
