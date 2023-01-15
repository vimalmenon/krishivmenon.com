import Box from '@mui/material/Box';

import { IContainer } from './Container';
import { ReactChildren } from '../../types';

export const Container: React.FC<ReactChildren & IContainer> = ({
  children,
  component = 'div',
  direction = 'row',
  display = 'flex',
  sx = {},
}) => {
  return (
    <Box component={component} sx={{ ...sx, display, flexDirection: direction }}>
      {children}
    </Box>
  );
};
