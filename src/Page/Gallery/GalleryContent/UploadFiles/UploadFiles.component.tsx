import Button from '@mui/material/Button';

import { FileUpload, Icon, PromiseLoadingButton, Dialog } from '@common';

import { useFileUploadHelper } from '../../Gallery.service';

export const UploadFiles: React.FC = () => {
  const {
    files,
    onDeleteFile,
    onDropAccepted,
    onConvertFile,
    fileAction,
    onFileUploadCancel,
    uploadFiles,
  } = useFileUploadHelper();

  return (
    <Dialog open={fileAction === 'UPLOAD_FILE'} title={'Upload Files'}>
      <Dialog.Body>
        <FileUpload
          files={files}
          onDropAccepted={onDropAccepted}
          onDeleteFile={onDeleteFile}
          onConvertFile={onConvertFile}
        />
      </Dialog.Body>
      <Dialog.Footer>
        <PromiseLoadingButton
          variant="contained"
          disabled={false}
          onClick={uploadFiles}
          startIcon={<Icon.icons.CloudUpload />}
        >
          Upload
        </PromiseLoadingButton>
        <Button variant="outlined" startIcon={<Icon.icons.Cancel />} onClick={onFileUploadCancel}>
          Cancel
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};
