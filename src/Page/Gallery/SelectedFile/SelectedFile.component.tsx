import Button from '@mui/material/Button';

import { useCommonGallery } from '../Gallery.service';

export const SelectedFile: React.FC = () => {
  const { selectedFile, onFileDelete } = useCommonGallery();
  if (selectedFile) {
    return (
      <div>
        <div>{selectedFile.id}</div>
        <Button variant="contained" onClick={onFileDelete}>
          Delete
        </Button>
      </div>
    );
  }
  return null;
};
