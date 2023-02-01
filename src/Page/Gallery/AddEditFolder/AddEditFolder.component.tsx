import { CommonIcons } from '@constant';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Spacing } from '@style';

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
    <Container
      component={'section'}
      sx={{ width: '400px', gap: Spacing.md, padding: Spacing.sm }}
      direction="column"
    >
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
    </Container>
  );
};
