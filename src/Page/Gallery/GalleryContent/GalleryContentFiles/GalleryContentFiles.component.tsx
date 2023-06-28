import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

import { Icon, FileViewer } from '@common';

import { useFileHelper, useFolderHelper } from '../../Gallery.service';
import { GalleryContentFilesStyle } from '../GalleryContent.style';

export const GalleryContentFiles: React.FC = () => {
  const { currentFolder } = useFolderHelper();
  const { onFileToggle, onFileMoveRequest, onFileDeleteRequest } = useFileHelper();
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
            <GalleryContentFilesStyle>
              {currentFolder.files.map((file) => {
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
