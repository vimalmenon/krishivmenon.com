import React from 'react';

import { CommonIcons } from '@constant';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { Container } from '@style';
import { IFolder } from '@types';

import {
  GalleryContext,
  initialContextValue,
  useCommonGallery,
  useGallery,
  getFolder,
} from './Gallery.service';
import { GalleryFolder } from './GalleryFolder';
import { SelectedFolder } from './SelectedFolder';

const GalleryChildren: React.FC = () => {
  const { folder, selectedFolder, onFolderAdd, index, onFolderSelect } = useCommonGallery();
  const trails = getFolder(folder, index);
  const lastFolder = trails[index.length];
  return (
    <Container component={'section'} sx={{ flex: '1 1 100%' }}>
      <Container component={'div'} direction="column" sx={{ flex: '1 1 100%', gap: '20px' }}>
        <div>
          <CommonIcons.Add onClick={onFolderAdd} />
        </div>
        <div>
          <Breadcrumbs>
            {trails.map((trail) => {
              return (
                <Chip key={trail.id} label={trail.label} onClick={() => onFolderSelect(trail)} />
              );
            })}
          </Breadcrumbs>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {lastFolder.folders.map((folder) => {
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
  const { loading, folder, index, currentFolder, onFolderSelect } = useGallery();
  return (
    <GalleryContext.Provider
      value={{
        loading,
        folder,
        selectedFolder,
        onFolderSelect,
        index,
        currentFolder,
        setSelectedFolder,
      }}
    >
      {loading ? <div>...Loading</div> : <GalleryChildren />}
    </GalleryContext.Provider>
  );
};
