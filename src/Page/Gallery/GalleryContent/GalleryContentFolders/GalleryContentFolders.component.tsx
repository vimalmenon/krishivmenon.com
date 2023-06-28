import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

import { Icon } from '@common';

import { GalleryFolder } from './GalleryFolder';
import { useFolderHelper } from '../../Gallery.service';
import { GalleryContentFolderStyle } from '../GalleryContent.style';

export const GalleryContentFolders: React.FC = () => {
  const { currentFolder, onFolderToggle, folderMap, selectedFolder } = useFolderHelper();
  return (
    <>
      <div>
        <Divider textAlign="left">
          <Chip
            label="Folders"
            icon={currentFolder.isFolderFolded ? <Icon.icons.DownArrow /> : <Icon.icons.UpArrow />}
            onClick={() => onFolderToggle(currentFolder)}
          />
        </Divider>
      </div>
      <Collapse in={!currentFolder.isFolderFolded}>
        <GalleryContentFolderStyle>
          {currentFolder.folders.map((value) => {
            return (
              <GalleryFolder
                key={value}
                folder={folderMap[value]}
                isSelected={selectedFolder?.id === value}
              />
            );
          })}
        </GalleryContentFolderStyle>
      </Collapse>
    </>
  );
};
