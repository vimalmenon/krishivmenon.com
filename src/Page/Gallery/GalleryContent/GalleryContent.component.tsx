import React from 'react';

import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

import { Icon, Image } from '@common';
import { ENV } from '@constant';

import {
  GalleryContentRoot,
  GalleryContentFolder,
  GalleryContentExtra,
  GalleryContentFilesRoot,
  GalleryContentFiles,
} from './GalleryContent.style';
import { AddEditFolder } from '../AddEditFolder';
import { useCommonGallery } from '../Gallery.service';
import { GalleryFolder, GalleryFolderLoading } from '../GalleryFolder';
import { UploadFiles } from '../UploadFiles';

export const GalleryContent: React.FC = () => {
  const {
    folderMap,
    selectedItem,
    onFileToggle,
    currentFolder,
    onFolderToggle,
    setSelectedItem,
    showFileUploader,
  } = useCommonGallery();
  const folder = React.useMemo(() => folderMap[currentFolder], [folderMap[currentFolder]]);
  if (folder.loading) {
    return (
      <GalleryContentRoot>
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
              <GalleryFolderLoading />
              <GalleryFolderLoading />
              <GalleryFolderLoading />
            </GalleryContentFolder>
          </Collapse>
        </GalleryContentFilesRoot>
      </GalleryContentRoot>
    );
  }
  if (folder.files.length === 0 && folder.folders.length === 0) {
    return (
      <GalleryContentRoot>
        <GalleryContentFilesRoot>No files and folder found.</GalleryContentFilesRoot>
      </GalleryContentRoot>
    );
  }
  return (
    <GalleryContentRoot>
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
                  isSelected={selectedItem?.id === value}
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
                    <div
                      key={file.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        flex: '0 0 250px',
                      }}
                      role="presentation"
                      onClick={() => setSelectedItem(file)}
                    >
                      <Image
                        src={`${ENV.ASSET_S3_BUCKET}/${file.path}`}
                        alt={file.name}
                        width={300}
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
      <GalleryContentExtra>
        {selectedItem && <AddEditFolder />}
        {showFileUploader && <UploadFiles />}
      </GalleryContentExtra>
    </GalleryContentRoot>
  );
};
