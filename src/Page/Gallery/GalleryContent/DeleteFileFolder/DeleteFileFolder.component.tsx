import { Confirm } from '@common';

import { useFileHelper, useFolderHelper } from '../../Gallery.service';

export const DeleteFileFolder: React.FC = () => {
  const { onFolderDelete, deleteConfirm, onDeleteConfirmCancel, folder } = useFolderHelper();
  const { selectedFile, onFileDelete } = useFileHelper();

  return (
    <Confirm
      open={deleteConfirm}
      handleClose={onDeleteConfirmCancel}
      handleConfirmPromise={() => (selectedFile ? onFileDelete() : onFolderDelete())}
    >
      <>
        Are you sure you want to delete {folder?.label} {selectedFile?.label}{' '}
      </>
    </Confirm>
  );
};
