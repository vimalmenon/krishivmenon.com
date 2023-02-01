import { CommonIcons } from '@constant';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container } from '@style';

import { PaperStyle } from './AddEditFolder.style';
import { useCommonGallery } from '../Gallery.service';

export const AddEditFolder: React.FC = () => {
  const {
    addEditFolder,
    onSelectedFolderCancel,
    onSelectedFolderLabelUpdate,
    onAddFolderSave,
    onFolderDelete,
  } = useCommonGallery();
  return (
    <PaperStyle elevation={6}>
      <Container component={'div'} sx={{ justifyContent: 'space-between' }}>
        {addEditFolder?.id ? <span>Edit {addEditFolder.label}</span> : <span>Add Folder</span>}
        <CommonIcons.Cancel onClick={onSelectedFolderCancel} />
      </Container>
      <Container component={'div'} sx={{ flex: '0' }}>
        <TextField
          variant="standard"
          size="small"
          value={addEditFolder?.label}
          fullWidth
          onChange={(e) => onSelectedFolderLabelUpdate(e.target.value)}
        />
      </Container>
      <Container component={'div'} sx={{ flex: '1' }}>
        &nbsp;
      </Container>
      <Container component={'div'} sx={{ justifyContent: 'space-between' }}>
        <Button variant="contained" onClick={onAddFolderSave}>
          Save
        </Button>
        <Button variant="contained" onClick={onFolderDelete}>
          Delete
        </Button>
      </Container>
    </PaperStyle>
  );
};
