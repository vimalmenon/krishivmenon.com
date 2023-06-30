import { Confirm } from '@common';

import { useFileHelper, useFolderHelper } from '../../Gallery.service';

export const DeleteFileFolder: React.FC = () => {
  const { onFolderDelete, selectedFolder, deleteConfirm, onDeleteConfirmCancel } =
    useFolderHelper();
  const { selectedFile, onFileDelete } = useFileHelper();
  return (
    <Confirm
      open={deleteConfirm}
      handleClose={onDeleteConfirmCancel}
      handleConfirmPromise={() => (selectedFile ? onFileDelete() : onFolderDelete())}
    >
      <>
        Are you sure you want to delete {selectedFolder?.label} {selectedFile?.label}{' '}
      </>
    </Confirm>
  );
};
