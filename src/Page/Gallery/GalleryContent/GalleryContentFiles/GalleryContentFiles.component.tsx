import React from 'react';

import Pagination from '@mui/material/Pagination';

import { FileAction } from '@common';
import { usePagination } from '@hook';

import { useFileHelper, useFolderHelper } from '../../Gallery.service';
import { GalleryContentFilesStyle } from '../GalleryContent.style';

export const GalleryContentFiles: React.FC = () => {
  const { currentFolder } = useFolderHelper();
  const { onFileMoveRequest, onFileDeleteRequest, onViewFile, onFileEditSave } = useFileHelper();
  const { page, handleChange, paginationCount, pageStart, pageEnd } = usePagination({
    fileLength: currentFolder.files.length,
    pageSize: 10,
  });
  return (
    <>
      {currentFolder.files.length ? (
        <>
          <Pagination count={paginationCount} page={page} onChange={handleChange} size="large" />
          <GalleryContentFilesStyle>
            {[...currentFolder.files.slice(pageStart, pageEnd)].map((file) => {
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
                  <FileAction
                    file={file}
                    width={400}
                    height={450}
                    onViewFile={onViewFile}
                    onFileEditSave={onFileEditSave}
                    onFileMoveRequest={onFileMoveRequest}
                    onFileDeleteRequest={onFileDeleteRequest}
                  />
                </div>
              );
            })}
          </GalleryContentFilesStyle>
        </>
      ) : null}
    </>
  );
};
