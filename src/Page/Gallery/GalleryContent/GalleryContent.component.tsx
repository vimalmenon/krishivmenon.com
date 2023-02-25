import Divider from '@mui/material/Divider';

import {
  GalleryContentRoot,
  GalleryContentFiles,
  GalleryContentExtra,
  GalleryContentFilesRoot,
} from './GalleryContent.style';
import { AddEditFolder } from '../AddEditFolder';
import { useCommonGallery } from '../Gallery.service';
import { GalleryFolder } from '../GalleryFolder';
import { UploadFiles } from '../UploadFiles';

export const GalleryContent: React.FC = () => {
  const { folderMap, currentFolder, addEditFolder, showFileUploader } = useCommonGallery();
  return (
    <GalleryContentRoot>
      {folderMap.root.loading ? (
        <div>Loading...</div>
      ) : (
        <GalleryContentFilesRoot>
          <div>
            <Divider textAlign="left">Folders</Divider>
          </div>
          <GalleryContentFiles>
            {folderMap[currentFolder].folders.map((value) => {
              return <GalleryFolder key={value} folder={folderMap[value]} />;
            })}
          </GalleryContentFiles>
        </GalleryContentFilesRoot>
      )}
      <GalleryContentExtra>
        {addEditFolder && <AddEditFolder />}
        {showFileUploader && <UploadFiles />}
      </GalleryContentExtra>
    </GalleryContentRoot>
  );
};
