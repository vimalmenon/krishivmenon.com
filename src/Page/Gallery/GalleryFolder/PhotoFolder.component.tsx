import { Folder } from '@common';
import { NotImplemented } from '@utility';

import { IPhotoFolder } from './PhotoFolder';
import { usePhotoFolder } from './PhotoFolder.hook';

export const PhotoFolder: React.FC<IPhotoFolder> = ({ folder }) => {
  const { folderName, setFolderName, onFolderNameChangeCancel } = usePhotoFolder(folder);
  return (
    <Folder
      name={folderName}
      edit={!folder.id}
      onNameChange={setFolderName}
      onCancel={onFolderNameChangeCancel}
      onSave={NotImplemented}
      onDelete={NotImplemented}
    />
  );
};
