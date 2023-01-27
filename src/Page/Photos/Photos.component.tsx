import { FileUpload } from '@common';
import { CommonIcons } from '@constant';

import { usePhotos } from './Photos.hook';

export const Photos: React.FC = () => {
  const { createdFolder, onFolderAdd, folders, onAddFolderCancel } = usePhotos();
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
                <CommonIcons.Check />
                <CommonIcons.Cancel onClick={onAddFolderCancel} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
