import { Image, Video } from '@common';
import { getS3BucketFullPath } from '@utility';

import { IFileViewer } from './FileViewer';

export const FileViewer: React.FC<IFileViewer> = ({ file, width, height }) => {
  if (file.type === 'image/jpeg') {
    return (
      <Image src={getS3BucketFullPath(file.path)} height={height} width={width} alt={file.label} />
    );
  }
  if (file.type === 'video/mp4') {
    return <Video src={getS3BucketFullPath(file.path)} />;
  }
  return null;
};
