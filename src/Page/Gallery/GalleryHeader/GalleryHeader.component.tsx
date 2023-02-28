import { Icon } from '@common';
import { MaxFolderUploadDepth } from '@constant';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { Container, Spacing } from '@style';

import { GalleryHeaderRoot } from './GalleryHeader.style';
import { useCommonGallery } from '../Gallery.service';

export const GalleryHeader: React.FC = () => {
  const { folderMap, currentFolder, onFolderSelect, toggleShowUploadFolder, onFolderAdd } =
    useCommonGallery();
  return (
    <GalleryHeaderRoot>
      <Container component={'div'} sx={{ gap: Spacing.md, justifyContent: 'space-between' }}>
        <div>
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
        </div>
        <div>
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
        </div>
      </Container>
    </GalleryHeaderRoot>
  );
};
