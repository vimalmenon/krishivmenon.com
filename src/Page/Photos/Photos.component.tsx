import { FileUpload, Folder } from '@common';
import { CommonIcons } from '@constant';

import { usePhotos } from './Photos.hook';

export const Photos: React.FC = () => {
  const {
    createdFolder,
    onFolderAdd,
    folders,
    onAddFolderCancel,
    onAddFolderUpdate,
    onAddFolderSave,
    onFolderDelete,
  } = usePhotos();
  return (
    <div>
      <div>
        <CommonIcons.Add onClick={onFolderAdd} />
      </div>
      <FileUpload fileType="image" />
      <div style={{ display: 'flex', gap: '20px' }}>
        {(createdFolder ? [createdFolder, ...folders] : folders).map((folder) => {
          return (
            <Folder
              key={folder.id}
              name={folder.label}
              edit={!folder.id}
              onNameChange={(value) => onAddFolderUpdate('label', value)}
              onCancel={onAddFolderCancel}
              onSave={onAddFolderSave}
              onDelete={() => onFolderDelete(folder.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
