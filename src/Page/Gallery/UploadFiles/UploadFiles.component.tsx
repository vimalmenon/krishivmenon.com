import Button from '@mui/material/Button';

import { FileUpload, Icon, PromiseLoadingButton } from '@common';
import { Container, PageTitle } from '@style';

import { PaperStyle } from './UploadFiles.style';
import { useCommonGallery } from '../Gallery.service';

export const UploadFiles: React.FC = () => {
  const {
    files,
    accept,
    uploadFiles,
    onDeleteFile,
    onDropAccepted,
    toggleShowUploadFolder,
    onConvertFile,
  } = useCommonGallery();
  return (
    <PaperStyle>
      <Container component={'div'} sx={{ flex: '0 0 30px', alignItems: 'center' }}>
        <PageTitle>Upload Files</PageTitle>
      </Container>
      <Container component={'div'} sx={{ flex: '1' }}>
        <FileUpload
          files={files}
          accept={accept}
          onDropAccepted={onDropAccepted}
          onDeleteFile={onDeleteFile}
          onConvertFile={onConvertFile}
        />
      </Container>
      <Container component={'div'} sx={{ justifyContent: 'space-between' }}>
        <PromiseLoadingButton
          variant="contained"
          disabled={!files.length}
          onClick={uploadFiles}
          startIcon={<Icon.icons.CloudUpload />}
        >
          Upload
        </PromiseLoadingButton>
        <Button
          variant="outlined"
          onClick={toggleShowUploadFolder}
          startIcon={<Icon.icons.Cancel />}
        >
          Cancel
        </Button>
      </Container>
    </PaperStyle>
  );
};
