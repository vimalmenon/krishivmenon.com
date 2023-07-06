import { useDropzone } from 'react-dropzone';

import { AcceptVideo, AcceptImages } from '@constant';
import { ReactChildren } from '@types';

import { IGalleryUploadContainer } from './GalleryUploadContainer';
import { GalleryFileUploadStyle } from '../GalleryContent.style';

export const GalleryUploadContainer: React.FC<ReactChildren & IGalleryUploadContainer> = ({
  children,
  uploadFiles,
}) => {
  const { getRootProps } = useDropzone({
    accept: { ...AcceptVideo, ...AcceptImages },
    onDropAccepted: uploadFiles,
  });
  return (
    <GalleryFileUploadStyle {...getRootProps()} onClick={(event: any) => event.preventDefault()}>
      {children}
    </GalleryFileUploadStyle>
  );
};
