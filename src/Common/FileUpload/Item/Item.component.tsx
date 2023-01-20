import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress from '@mui/material/LinearProgress';

export const Item: React.FC<any> = ({ file }) => {
  return (
    <div key={file.name}>
      <img
        src={URL.createObjectURL(file)}
        style={{ height: '70px', width: '50px' }}
        alt={file.name}
      />
      <DeleteIcon onClick={() => console.log('delete clicked')} />
      <LinearProgress color="secondary" />
    </div>
  );
};
