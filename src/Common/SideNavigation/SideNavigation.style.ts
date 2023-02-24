import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

export const SideNavigationList = styled(List)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
  };
});

export const SideNavigationRoot = styled('nav')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  };
});
