import React from 'react';

import { Icon } from '@common';
import { ENV } from '@constant';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
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
    selectedFile,
    currentFolder,
    addEditFolder,
    setSelectedFile,
    showFileUploader,
    onFolderToggle,
    onFileToggle,
  } = useCommonGallery();
  const folder = React.useMemo(() => folderMap[currentFolder], [folderMap[currentFolder]]);
  return (
    <GalleryContentRoot>
      {folderMap.root.loading ? (
        <div>Loading...</div>
      ) : (
        <GalleryContentFilesRoot>
          <div>
            <Divider textAlign="left">
              <Chip
                label="Folders"
                icon={folder.isFolderFolded ? <Icon.icons.DownArrow /> : <Icon.icons.UpArrow />}
                onClick={() => onFolderToggle(folder)}
              />
            </Divider>
          </div>
          <Collapse in={!folder.isFolderFolded}>
            <GalleryContentFolder>
              {folder.folders.map((value) => {
                return (
                  <GalleryFolder
                    key={value}
                    folder={folderMap[value]}
                    isSelected={addEditFolder?.id === value}
                  />
                );
              })}
            </GalleryContentFolder>
          </Collapse>
          {folder.files.length ? (
            <>
              <div>
                <Divider textAlign="left">
                  <Chip
                    label="Files"
                    icon={folder.isFileFolded ? <Icon.icons.DownArrow /> : <Icon.icons.UpArrow />}
                    onClick={() => onFileToggle(folder)}
                  />
                </Divider>
              </div>
              <Collapse in={!folder.isFileFolded}>
                <GalleryContentFiles>
                  {folder.files.map((file) => {
                    return (
                      <div key={file.id} role="presentation" onClick={() => setSelectedFile(file)}>
                        <img
                          src={`${ENV.ASSET_S3_BUCKET}/${file.path}`}
                          alt={file.name}
                          width={'175px'}
                        />
                        {file.name}
                      </div>
                    );
                  })}
                </GalleryContentFiles>
              </Collapse>
            </>
          ) : null}
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
