import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

import { Icon } from '@common';

import { IGalleryHelper } from './GalleryHelper';
import { useFileHelper, useFileUploadHelper, useFolderHelper } from '../../Gallery.service';
import { GalleryContentFolderStyle, GalleryContentFilesRoot } from '../GalleryContent.style';
import { GalleryFolderLoading } from '../GalleryContentFolders/GalleryFolder';
import { GalleryUploadContainer } from '../GalleryUploadContainer';

export const GalleryHelper: React.FC<IGalleryHelper> = ({
  gallery,
  GalleryFolder,
  GalleryFile,
}) => {
  const { currentFolder, onFolderToggle } = useFolderHelper();
  const { onFileToggle } = useFileHelper();
  const { uploadFiles } = useFileUploadHelper();

  if (gallery.loading) {
    return (
      <GalleryContentFolderStyle>
        <GalleryFolderLoading />
        <GalleryFolderLoading />
        <GalleryFolderLoading />
      </GalleryContentFolderStyle>
    );
  }
  if (gallery.files.length === 0 && gallery.folders.length === 0) {
    return <GalleryContentFilesRoot>No files and folder found.</GalleryContentFilesRoot>;
  }
  return (
    <GalleryContentFilesRoot>
      <GalleryUploadContainer uploadFiles={uploadFiles} canUpload={!currentFolder.isFileLocked}>
        {currentFolder.folders.length ? (
          <>
            <div>
              <Divider textAlign="left">
                <Chip
                  label="Folders"
                  icon={
                    currentFolder.isFolderFolded ? <Icon.icons.DownArrow /> : <Icon.icons.UpArrow />
                  }
                  onClick={() => onFolderToggle(currentFolder)}
                />
              </Divider>
            </div>
            <Collapse in={!currentFolder.isFolderFolded}>
              <GalleryFolder />
            </Collapse>
          </>
        ) : null}

        {currentFolder.files.length ? (
          <>
            <div>
              <Divider textAlign="left">
                <Chip
                  label="Files"
                  icon={
                    currentFolder.isFileFolded ? <Icon.icons.DownArrow /> : <Icon.icons.UpArrow />
                  }
                  onClick={() => onFileToggle(currentFolder)}
                />
              </Divider>
            </div>
            <Collapse in={!currentFolder.isFileFolded}>
              <GalleryFile />
            </Collapse>
          </>
        ) : null}
      </GalleryUploadContainer>
    </GalleryContentFilesRoot>
  );
};
