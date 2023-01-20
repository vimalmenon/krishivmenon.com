import React from 'react';

import { FileType } from '@constant';
import { useCommonApiContext } from '@context';
import { apis } from '@utility';
import { getUid } from '@utility';
import { useDropzone } from 'react-dropzone';
import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress from '@mui/material/LinearProgress';

export const FileUpload: React.FC<any> = ({ saveFile }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const { makeApiCall } = useCommonApiContext();
  React.useEffect(() => {
    acceptedFiles.map((file) => {
      const extension = FileType[file.type];
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
          return (
            <div key={file.name}>
                <img src={URL.createObjectURL(file)} style={{ height: '70px', width: '50px' }} />
                <DeleteIcon onClick={() => console.log("delete clicked")}/>
                <LinearProgress color="secondary" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
