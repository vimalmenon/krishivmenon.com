import React from 'react';

import Pagination from '@mui/material/Pagination';

import { FileViewer } from '@common';

import { useFileHelper, useFolderHelper } from '../../Gallery.service';
import { GalleryContentFilesStyle } from '../GalleryContent.style';

export const GalleryContentFiles: React.FC = () => {
  const { currentFolder } = useFolderHelper();
  const { onFileMoveRequest, onFileDeleteRequest, onViewFile } = useFileHelper();
  const [page, setPage] = React.useState<number>(0);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };
  return (
    <>
      {currentFolder.files.length ? (
        <>
          <Pagination
            count={Math.ceil(currentFolder.files.length / 10)}
            page={page + 1}
            onChange={handleChange}
            size="large"
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
        </>
      ) : null}
    </>
  );
};
