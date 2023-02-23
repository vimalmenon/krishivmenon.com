import { styled } from '@mui/material/styles';

export const ProfileRoot = styled('section')(({ theme }) => {
  return {
    display: 'flex',
    padding: theme.spacing(1),
    '& .profile': {
      padding: theme.spacing(1),
    },
    '& .profile-detail': {
      padding: theme.spacing(1),
      display: 'flex',
      flex: '1',
      alignItems: 'center',
    },
  };
});
