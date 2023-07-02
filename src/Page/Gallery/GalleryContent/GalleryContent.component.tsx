import React from 'react';

import { AddEditFolder } from './AddEditFolder';
import { DeleteFileFolder } from './DeleteFileFolder';
import { EditFile } from './EditFile';
import { GalleryContentRoot } from './GalleryContent.style';
import { GalleryContentFiles } from './GalleryContentFiles';
import { GalleryContentFolders } from './GalleryContentFolders';
import { GalleryHelper } from './GalleryHelper';
import { MoveFile } from './MoveFile';
import { UploadFiles } from './UploadFiles';
import { ViewFile } from './ViewFile';
import { useFolderHelper } from '../Gallery.service';

export const GalleryContent: React.FC = () => {
  const { currentFolder } = useFolderHelper();

  return (
    <GalleryContentRoot>
      <DeleteFileFolder />
      <AddEditFolder />
      <UploadFiles />
      <MoveFile />
      <ViewFile />
      <EditFile />
      <GalleryHelper
        GalleryFolder={GalleryContentFolders}
        GalleryFile={GalleryContentFiles}
        gallery={currentFolder}
      />
    </GalleryContentRoot>
  );
};
