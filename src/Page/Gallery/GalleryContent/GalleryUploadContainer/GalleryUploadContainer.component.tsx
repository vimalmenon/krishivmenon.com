import { MouseEventHandler } from 'react';

import { useDropzone } from 'react-dropzone';

import { AcceptVideo, AcceptImages } from '@constant';
import { ReactChildren } from '@types';

import { IGalleryUploadContainer } from './GalleryUploadContainer';
import { GalleryFileUploadStyle } from '../GalleryContent.style';

export const GalleryUploadContainer: React.FC<ReactChildren & IGalleryUploadContainer> = ({
  children,
  uploadFiles,
  canUpload = false,
}) => {
  const onClick: MouseEventHandler<HTMLElement> = (event) => {
    event.preventDefault();
  };
  const { getRootProps } = useDropzone({
    accept: { ...AcceptVideo, ...AcceptImages },
    onDropAccepted: uploadFiles,
    // onDropAccepted: console.log,
  });
  const props = canUpload ? getRootProps() : {};
  return (
    <GalleryFileUploadStyle {...props} onClick={onClick}>
      {children}
    </GalleryFileUploadStyle>
  );
};
