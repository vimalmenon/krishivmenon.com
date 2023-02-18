import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

export const SideNavigationList = styled(List)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
  };
});
export const SideNavigationProfile = styled('div')(({ theme }) => {
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
export const SideNavigationRoot = styled('nav')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  };
});
