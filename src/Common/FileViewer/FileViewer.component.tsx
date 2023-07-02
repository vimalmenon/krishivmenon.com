import { Image, Video } from '@common';
import { FileMapping } from '@constant';
import { getS3BucketFullPath } from '@utility';

import { IFileViewer } from './FileViewer';

export const FileViewer: React.FC<IFileViewer> = ({ file, width, height }) => {
  FileMapping;
  if (FileMapping[file.type] === 'image') {
    return (
      <Image src={getS3BucketFullPath(file.path)} height={height} width={width} alt={file.label} />
    );
  }
  if (FileMapping[file.type] === 'video') {
    return <Video src={getS3BucketFullPath(file.path)} />;
  }
  return null;
};
