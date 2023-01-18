import { FileUpload } from '@common';

import { usePhotos } from './Photos.service';

export const Photos: React.FC = () => {
  const { savePhoto, base64 } = usePhotos();
  return (
    <div>
      <FileUpload saveFile={savePhoto} />
      <div>
        {base64}
      </div>
    </div>
  );
};
