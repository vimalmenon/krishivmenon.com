import { FileUpload, Icon } from '@common';
import Button from '@mui/material/Button';
import { Container } from '@style';

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
        <Button
          variant="contained"
          disabled={!files.length}
          onClick={uploadFiles}
          startIcon={<Icon.icons.CloudUpload />}
        >
          Upload
        </Button>
        <Button variant="outlined" onClick={toggleShowUploadFolder}>
          Cancel
        </Button>
      </Container>
    </PaperStyle>
  );
};
