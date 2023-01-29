import React from 'react';

import { FileUpload } from '@common';
import { CommonIcons } from '@constant';

import { usePhotos, GalleryContext } from './Gallery.service';
import { PhotoFolder } from './GalleryFolder';

const GalleryChildren: React.FC = () => {
  const { createdFolder, onFolderAdd, folders } = usePhotos();
  return (
    <div>
      <div>
        <CommonIcons.Add onClick={onFolderAdd} />
      </div>
      <FileUpload fileType="image" />
      <div style={{ display: 'flex', gap: '20px' }}>
        {(createdFolder ? [createdFolder, ...folders] : folders).map((folder) => {
          return <PhotoFolder key={folder.id} folder={folder} />;
        })}
      </div>
    </div>
  );
};
export const Gallery: React.FC = () => {
  const [loading] = React.useState<boolean>(false);
  return (
    <GalleryContext.Provider value={{ loading }}>
      <GalleryChildren />
    </GalleryContext.Provider>
  );
};
