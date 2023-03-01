import { Icon } from '@common';
import { MaxFolderUploadDepth } from '@constant';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import { Container } from '@style';

import { GalleryHeaderRoot } from './GalleryHeader.style';
import { useCommonGallery } from '../Gallery.service';

export const GalleryHeader: React.FC = () => {
  const { folderMap, currentFolder, onFolderSelect, toggleShowUploadFolder, onFolderAdd } =
    useCommonGallery();
  return (
    <GalleryHeaderRoot>
      <Breadcrumbs>
        {folderMap[currentFolder].breadcrumbs.map((value) => {
          return (
            <Chip
              key={value}
              label={folderMap[value].label}
              onClick={() => onFolderSelect(folderMap[value])}
            />
          );
        })}
      </Breadcrumbs>
      <div>
        {folderMap[currentFolder].loading ? (
          <Container component="div" sx={{ gap: 1 }}>
            <Skeleton variant="circular" height="30px" width="30px" />
            <Skeleton variant="circular" height="30px" width="30px" />
          </Container>
        ) : (
          <>
            {folderMap[currentFolder].id !== 'root' && (
              <Icon
                Icon={Icon.icons.CloudUpload}
                label="Upload files"
                onClick={toggleShowUploadFolder}
              />
            )}
            {folderMap[currentFolder].breadcrumbs.length < MaxFolderUploadDepth && (
              <Icon Icon={Icon.icons.Add} label="Add folder" onClick={onFolderAdd} />
            )}
          </>
        )}
      </div>
    </GalleryHeaderRoot>
  );
};
