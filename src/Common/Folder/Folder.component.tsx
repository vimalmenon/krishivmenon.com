import { CommonIcons } from '@constant';
import TextField from '@mui/material/TextField';

import { IFolder } from './Folder';
import { FolderStyle, FolderContainer, FolderInput } from './Folder.style';

export const Folder: React.FC<IFolder> = ({
  name,
  edit,
  onNameChange,
  onCancel,
  onSave,
  onDelete,
}) => {
  return (
    <FolderContainer>
      <FolderStyle>
        <div className="delete">
          <CommonIcons.Delete fontSize="small" onClick={onDelete} />
        </div>
        <div>
          <CommonIcons.Folder fontSize="large" />
        </div>
        <div>{name}</div>
      </FolderStyle>
      {edit && (
        <FolderInput>
          <TextField
            variant="standard"
            size="small"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
          <CommonIcons.Check onClick={onSave} />
          <CommonIcons.Cancel onClick={onCancel} />
        </FolderInput>
      )}
    </FolderContainer>
  );
};
