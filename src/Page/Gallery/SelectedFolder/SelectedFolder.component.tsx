import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container } from '@style';

import { useCommonGallery } from '../Gallery.service';

export const SelectedFolder: React.FC = () => {
  const {
    selectedFolder,
    onSelectedFolderCancel,
    onSelectedFolderLabelUpdate,
    onAddFolderSave,
    onFolderDelete,
  } = useCommonGallery();
  return (
    <Container component={'section'} sx={{ width: '300px' }} direction="column">
      <Container component={'section'}>
        {selectedFolder?.id ? <span>Edit {selectedFolder.label}</span> : <span>Add Folder</span>}
      </Container>
      <div>
        <TextField
          variant="standard"
          size="small"
          value={selectedFolder?.label}
          onChange={(e) => onSelectedFolderLabelUpdate(e.target.value)}
        />
      </div>
      <div>
        <Button variant="contained" onClick={onAddFolderSave}>
          Save
        </Button>
        <Button variant="contained" onClick={onSelectedFolderCancel}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onFolderDelete}>
          Delete
        </Button>
      </div>
    </Container>
  );
};
