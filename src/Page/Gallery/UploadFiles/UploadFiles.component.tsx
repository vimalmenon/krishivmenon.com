import { FileUpload } from '@common';
import Button from '@mui/material/Button';
import { Container } from '@style';

import { PaperStyle } from './UploadFiles.style';
import { useCommonGallery } from '../Gallery.service';

export const UploadFiles: React.FC = () => {
  const { toggleShowUploadFolder, accept, onDropAccepted, onDropRejected, onDeleteFile, files } =
    useCommonGallery();
  return (
    <PaperStyle>
      <Container component={'div'} sx={{ flex: '1' }}>
        <FileUpload
          files={files}
          accept={accept}
          onDropAccepted={onDropAccepted}
          onDropRejected={onDropRejected}
          onDeleteFile={onDeleteFile}
        />
      </Container>
      <Container component={'div'} sx={{ justifyContent: 'space-between' }}>
        <Button variant="contained">Upload</Button>
        <Button variant="contained" onClick={toggleShowUploadFolder}>
          Cancel
        </Button>
      </Container>
    </PaperStyle>
  );
};
