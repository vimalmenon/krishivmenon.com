import React from 'react';

import { CommonIcons } from '@constant';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { Container } from '@style';
import { Spacing } from '@style';
import { IFolder } from '@types';

import { AddEditFolder } from './AddEditFolder';
import {
  GalleryContext,
  initialContextValue,
  useCommonGallery,
  useGallery,
} from './Gallery.service';
import { GalleryFolder } from './GalleryFolder';

const GalleryChildren: React.FC = () => {
  const { currentFolder, addEditFolder, onFolderAdd, folderMap, onFolderSelect } =
    useCommonGallery();
  return (
    <Container component={'section'} sx={{ flex: '1 1 100%' }}>
      <Container component={'div'} direction="column" sx={{ gap: Spacing.md }}>
        <div>
          <CommonIcons.Add onClick={onFolderAdd} />
        </div>
        <div>
          <Breadcrumbs>
            {folderMap[currentFolder].breadcrumbs.map((value) => {
              return (
                <Chip
                  key={value}
                  label={folderMap[value].label}
                  onClick={() => onFolderSelect(folderMap[value])}
                />
              );
            })}
          </Breadcrumbs>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {folderMap[currentFolder].folders.map((value) => {
            return <GalleryFolder key={value} folder={folderMap[value]} />;
          })}
        </div>
      </Container>
      {addEditFolder && <AddEditFolder />}
    </Container>
  );
};
export const Gallery: React.FC = () => {
  const [addEditFolder, setAddEditFolder] = React.useState<IFolder | null>(
    initialContextValue.addEditFolder
  );
  const { loading, currentFolder, folderMap, onFolderSelect, onFolderUpdate } = useGallery();
  return (
    <GalleryContext.Provider
      value={{
        loading,
        currentFolder,
        addEditFolder,
        onFolderSelect,
        folderMap,
        setAddEditFolder,
        onFolderUpdate,
      }}
    >
      {loading ? <div>...Loading</div> : <GalleryChildren />}
    </GalleryContext.Provider>
  );
};
