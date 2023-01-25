import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress from '@mui/material/LinearProgress';

import { IItem } from './Item';
import { useItem } from './Item.hook';
import { getUid } from '@utility';


export const Item: React.FC<IItem> = ({ file, fileType }) => {
  const uid = React.useMemo(() => getUid(), []);
  const { isDeleted, loading, extension, onDelete } = useItem(file, uid, fileType);
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
      <DeleteIcon onClick={onDelete} />
      {loading && <LinearProgress color="secondary" />}
    </div>
  );
};
