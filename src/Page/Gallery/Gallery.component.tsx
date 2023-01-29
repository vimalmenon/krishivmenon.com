import React from 'react';

import { CommonIcons } from '@constant';
import { Container } from '@style';
import { IFolder } from '@types';

import {
  GalleryContext,
  initialContextValue,
  useCommonGallery,
  useGallery,
} from './Gallery.service';
import { GalleryFolder } from './GalleryFolder';
import { SelectedFolder } from './SelectedFolder';

const GalleryChildren: React.FC = () => {
  const { folders, selectedFolder, onFolderAdd } = useCommonGallery();
  return (
    <Container component={'section'}>
      <Container component={'div'} direction="column" sx={{ flex: '1 1 100%' }}>
        <div>
          <CommonIcons.Add onClick={onFolderAdd} />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {folders.map((folder) => {
            return <GalleryFolder key={folder.id} folder={folder} />;
          })}
        </div>
      </Container>
      {selectedFolder && <SelectedFolder />}
    </Container>
  );
};
export const Gallery: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = React.useState<IFolder | null>(
    initialContextValue.selectedFolder
  );
  const { loading, folders, setFolders } = useGallery();
  return (
    <GalleryContext.Provider
      value={{ loading, folders, selectedFolder, setSelectedFolder, setFolders }}
    >
      <GalleryChildren />
    </GalleryContext.Provider>
  );
};
