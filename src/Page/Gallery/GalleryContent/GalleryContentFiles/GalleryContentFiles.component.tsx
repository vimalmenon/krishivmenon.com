import React from 'react';

import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';

import { Icon, FileViewer } from '@common';

import { useFileHelper, useFolderHelper } from '../../Gallery.service';
import { GalleryContentFilesStyle } from '../GalleryContent.style';

export const GalleryContentFiles: React.FC = () => {
  const { currentFolder } = useFolderHelper();
  const { onFileToggle, onFileMoveRequest, onFileDeleteRequest, onViewFile } = useFileHelper();
  const [page, setPage] = React.useState<number>(0);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };
  return (
    <>
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
            <Pagination
              count={Math.ceil(currentFolder.files.length / 10)}
              page={page + 1}
              onChange={handleChange}
            />
            <GalleryContentFilesStyle>
              {[...currentFolder.files.slice(page * 10, page * 10 + 10)].map((file) => {
                return (
                  <div
                    key={file.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flex: '0 0 250px',
                    }}
                  >
                    <FileViewer
                      file={file}
                      onFileMoveRequest={onFileMoveRequest}
                      onFileDeleteRequest={onFileDeleteRequest}
                      onViewFile={onViewFile}
                      width={400}
                      height={450}
                    />
                  </div>
                );
              })}
            </GalleryContentFilesStyle>
          </Collapse>
        </>
      ) : null}
    </>
  );
};
