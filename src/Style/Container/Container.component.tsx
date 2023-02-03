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
  className = '',
  isMain = false,
}) => {
  if (isMain) {
    return (
      <MuiContainer
        component={component}
        sx={{ display, flexDirection: direction, ...sx }}
        maxWidth="lg"
        className={className}
      >
        {children}
      </MuiContainer>
    );
  }
  return (
    <Box
      component={component}
      sx={{ ...sx, display, flexDirection: direction }}
      className={className}
    >
      {children}
    </Box>
  );
};
