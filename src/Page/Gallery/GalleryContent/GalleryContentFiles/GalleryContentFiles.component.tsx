import React from 'react';

import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

import { FileAction } from '@common';
import { usePagination } from '@hook';
import { Container } from '@style';

import { useFileHelper, useFolderHelper } from '../../Gallery.service';
import { GalleryContentFilesStyle } from '../GalleryContent.style';

export const GalleryContentFiles: React.FC = () => {
  const { currentFolder } = useFolderHelper();
  const { onFileMoveRequest, onFileDeleteRequest, onViewFile, onFileEditSave, onFileConvert } =
    useFileHelper();
  const { page, handleChange, paginationCount, pageStart, pageEnd, hasPagination } = usePagination({
    fileLength: currentFolder.files.length,
    pageSize: 12,
  });
  if (currentFolder.files.length) {
    return (
      <Container component={'div'} direction="column" sx={{ gap: 2 }}>
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
                  onFileConvert={onFileConvert}
                  onFileEditSave={onFileEditSave}
                  onFileMoveRequest={onFileMoveRequest}
                  onFileDeleteRequest={onFileDeleteRequest}
                />
              </div>
            );
          })}
        </GalleryContentFilesStyle>
        {hasPagination ? (
          <Container
            component={'div'}
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Typography variant="body1" sx={{ fontSize: '0.8em' }}>
              Total Files: {currentFolder.files.length}
            </Typography>
            <Pagination count={paginationCount} page={page} onChange={handleChange} />
          </Container>
        ) : null}
      </Container>
    );
  }
  return null;
};
