import { FileUpload } from '@common';

import { usePhotos } from './Photos.service';

export const Photos: React.FC = () => {
  const { savePhoto } = usePhotos();
  return (
    <div>
      <FileUpload saveFile={savePhoto} />
      <div></div>
    </div>
  );
};
