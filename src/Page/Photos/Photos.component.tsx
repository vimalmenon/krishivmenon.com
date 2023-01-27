import { FileUpload } from '@common';
import { CommonIcons } from '@constant';
import TextField from '@mui/material/TextField';

import { usePhotos } from './Photos.hook';

export const Photos: React.FC = () => {
  const {
    createdFolder,
    onFolderAdd,
    folders,
    onAddFolderCancel,
    onAddFolderUpdate,
    onAddFolderSave,
  } = usePhotos();
  return (
    <div>
      <div>
        <CommonIcons.Add onClick={onFolderAdd} />
      </div>
      <FileUpload fileType="image" />
      <div>
        {(createdFolder ? [createdFolder, ...folders] : folders).map((folder, key) => {
          return (
            <div key={key}>
              <div>{folder.label}</div>
              <div>
                <TextField
                  variant="standard"
                  size="small"
                  value={createdFolder?.label}
                  onChange={(e) => onAddFolderUpdate('label', e.target.value)}
                />
                <CommonIcons.Check onClick={onAddFolderSave} />
                <CommonIcons.Cancel onClick={onAddFolderCancel} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
