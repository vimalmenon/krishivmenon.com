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
  const { getRootProps } = useDropzone({
    accept: { ...AcceptVideo, ...AcceptImages },
    onDropAccepted: uploadFiles,
    // onDropAccepted: console.log,
  });
  const props = canUpload ? getRootProps() : {};
  return (
    <GalleryFileUploadStyle {...props} onClick={(event: any) => event.preventDefault()}>
      {children}
    </GalleryFileUploadStyle>
  );
};
