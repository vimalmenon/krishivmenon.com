import Box from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';

import { IContainer } from './Container';
import { ReactChildren } from '../../types';

export const Container: React.FC<ReactChildren & IContainer> = ({
  children,
  component = 'div',
  direction = 'row',
  display = 'flex',
  sx = {},
  isMain = false,
}) => {
  if (isMain) {
    return (
      <MuiContainer component={component} sx={{ display, flexDirection: direction, ...sx }} maxWidth="lg">
        {children}
      </MuiContainer>
    );
  }
  return (
    <Box component={component} sx={{ ...sx, display, flexDirection: direction }}>
      {children}
    </Box>
  );
};
