import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { clsx } from 'clsx';

import { Icon, PromiseLoadingButton, Dialog } from '@common';
import { Container } from '@style';

import { FolderStyleRoot } from './MoveFile.style';
import { useFileMoveHelper } from '../../Gallery.service';

export const MoveFile: React.FC = () => {
  const {
    onFileMoveCancel,
    fileAction,
    folderMap,
    folder,
    onClick,
    selectedFolder,
    onFolderChange,
    onFileMove,
  } = useFileMoveHelper();
  return (
    <Dialog open={fileAction === 'MOVE_FILE'} title={'Move files'}>
      <Dialog.Body>
        <Container component="div">
          <Breadcrumbs>
            {folder.breadcrumbs.map((value) => {
              return (
                <Chip
                  key={value}
                  label={folderMap[value].label}
                  onClick={() => onFolderChange(folderMap[value])}
                />
              );
            })}
          </Breadcrumbs>
        </Container>
        <Container component={'div'} sx={{ flexWrap: 'wrap', gap: 1.5 }}>
          {folder.folders.map((value) => {
            if (folderMap[value].isFixed) {
              return null;
            }
            return (
              <FolderStyleRoot
                key={value}
                onClick={(e) => onClick(e, folderMap[value])}
                className={clsx({ active: selectedFolder?.id === value })}
              >
                {folderMap[value].label}
              </FolderStyleRoot>
            );
          })}
        </Container>
      </Dialog.Body>
      <Dialog.Footer>
        <PromiseLoadingButton
          variant="contained"
          startIcon={<Icon.icons.Save />}
          disabled={!selectedFolder}
          onClick={onFileMove}
        >
          Move
        </PromiseLoadingButton>
        <Button variant="outlined" startIcon={<Icon.icons.Cancel />} onClick={onFileMoveCancel}>
          Cancel
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};
