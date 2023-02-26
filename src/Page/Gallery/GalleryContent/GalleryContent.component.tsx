import { Icon } from '@common';
import { ENV } from '@constant';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';

import {
  GalleryContentRoot,
  GalleryContentFolder,
  GalleryContentExtra,
  GalleryContentFilesRoot,
  GalleryContentFiles,
} from './GalleryContent.style';
import { AddEditFolder } from '../AddEditFolder';
import { useCommonGallery } from '../Gallery.service';
import { GalleryFolder } from '../GalleryFolder';
import { SelectedFile } from '../SelectedFile';
import { UploadFiles } from '../UploadFiles';

export const GalleryContent: React.FC = () => {
  const {
    folderMap,
    currentFolder,
    addEditFolder,
    showFileUploader,
    setSelectedFile,
    selectedFile,
  } = useCommonGallery();
  return (
    <GalleryContentRoot>
      {folderMap.root.loading ? (
        <div>Loading...</div>
      ) : (
        <GalleryContentFilesRoot>
          <div>
            <Divider textAlign="left">
              <Chip label="Folders" icon={<Icon.icons.UpArrow />} />
            </Divider>
          </div>
          <GalleryContentFolder>
            {folderMap[currentFolder].folders.map((value) => {
              return (
                <GalleryFolder
                  key={value}
                  folder={folderMap[value]}
                  isSelected={addEditFolder?.id === value}
                />
              );
            })}
          </GalleryContentFolder>
          <div>
            <Divider textAlign="left">
              <Chip label="Files" icon={<Icon.icons.UpArrow />} />
            </Divider>
          </div>
          <GalleryContentFiles>
            {folderMap[currentFolder].files.map((file) => {
              return (
                <div key={file.id} role="presentation" onClick={() => setSelectedFile(file)}>
                  <img src={`${ENV.S3_BUCKET}/${file.path}`} alt={file.name} width={'175px'} />
                  {file.name}
                </div>
              );
            })}
          </GalleryContentFiles>
        </GalleryContentFilesRoot>
      )}
      <GalleryContentExtra>
        {addEditFolder && <AddEditFolder />}
        {showFileUploader && <UploadFiles />}
        {selectedFile && <SelectedFile />}
      </GalleryContentExtra>
    </GalleryContentRoot>
  );
};
