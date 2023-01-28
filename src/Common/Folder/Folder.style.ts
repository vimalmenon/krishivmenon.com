import { styled } from '@mui/material/styles';

export const FolderStyle = styled('div')({
  border: '1px solid gray',
  height: '130px',
  width: '150px',
  display: 'flex',
  borderRadius: '15px',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  padding: '20px',
  '& .delete': {
    display: 'flex',
    justifyContent: 'end',
  },
});

export const FolderContainer = styled('section')({
  display: 'flex',
  flexDirection: 'column',
});

export const FolderInput = styled('section')({
  display: 'flex',
  margin: '10px 10px',
});
