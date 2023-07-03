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
  const {
    onFileMoveRequest,
    onFileDeleteRequest,
    onViewFile,
    onFileEditSave,
    onFileConvert,
    onFileEdit,
  } = useFileHelper();
  const { page, handleChange, paginationCount, pageStart, pageEnd, hasPagination } = usePagination({
    fileLength: currentFolder.files.length,
    pageSize: 12,
  });
  if (currentFolder.files.length) {
    return (
      <Container component={'div'} direction="column" sx={{ gap: 2 }}>
        <Container component={'div'} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body1" sx={{ fontSize: '0.8em' }}>
            Total Files: {currentFolder.files.length}
          </Typography>
          {hasPagination ? (
            <Container component={'div'} sx={{ alignItems: 'center', gap: 2 }}>
              <Pagination count={paginationCount} page={page} onChange={handleChange} />
            </Container>
          ) : null}
        </Container>

        <GalleryContentFilesStyle>
          {[...currentFolder.files.slice(pageStart, pageEnd)].map((file) => {
            return (
              <div
                key={file.id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flex: '1',
                }}
              >
                <FileAction
                  file={file}
                  onViewFile={onViewFile}
                  onFileConvert={onFileConvert}
                  onFileEdit={() => onFileEdit(file)}
                  onFileEditSave={onFileEditSave}
                  onFileMoveRequest={onFileMoveRequest}
                  onFileDeleteRequest={onFileDeleteRequest}
                />
              </div>
            );
          })}
        </GalleryContentFilesStyle>
      </Container>
    );
  }
  return null;
};
