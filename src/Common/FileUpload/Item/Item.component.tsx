import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress from '@mui/material/LinearProgress';

import { IItem } from './Item';
import { useItem } from './Item.hook';

export const Item: React.FC<IItem> = ({ file, uid }) => {
  const { isDeleted, loading, extension } = useItem(file, uid);

  if (isDeleted) {
    return null;
  }
  return (
    <div key={file.name}>
      <img
        src={URL.createObjectURL(file)}
        style={{ height: '70px', width: '50px' }}
        alt={file.name}
      />
      <div>
        {uid}.{extension}
      </div>
      <DeleteIcon />
      {loading && <LinearProgress color="secondary" />}
    </div>
  );
};
