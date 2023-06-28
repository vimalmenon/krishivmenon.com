import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';

import { Icon } from '@common';
import { MaxFolderUploadDepth } from '@constant';
import { Container } from '@style';

import { GalleryHeaderRoot } from './GalleryHeader.style';
import { useFileUploadHelper, useFolderHelper } from '../Gallery.service';

export const GalleryHeader: React.FC = () => {
  const { onFolderChange, folderMap, onFolderAdd, currentFolder } = useFolderHelper();
  const { onFileUploadOpen } = useFileUploadHelper();
  return (
    <GalleryHeaderRoot>
      <Breadcrumbs>
        {currentFolder.breadcrumbs.map((value) => {
          return (
            <Chip
              key={value}
              label={folderMap[value].label}
              onClick={() => onFolderChange(folderMap[value])}
            />
          );
        })}
      </Breadcrumbs>
      <div>
        {currentFolder.loading ? (
          <Container component="div" sx={{ gap: 1 }}>
            <Skeleton variant="circular" height="30px" width="30px" />
            <Skeleton variant="circular" height="30px" width="30px" />
          </Container>
        ) : (
          <>
            {currentFolder.id !== 'root' && (
              <Icon Icon={Icon.icons.CloudUpload} label="Upload files" onClick={onFileUploadOpen} />
            )}
            {currentFolder.breadcrumbs.length < MaxFolderUploadDepth && (
              <Icon Icon={Icon.icons.Add} label="Add folder" onClick={onFolderAdd} />
            )}
            <Icon Icon={Icon.icons.Info} label="Show Detail" />
          </>
        )}
      </div>
    </GalleryHeaderRoot>
  );
};
