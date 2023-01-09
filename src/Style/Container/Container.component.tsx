import Box from '@mui/material/Box';

import { ReactChildren } from '../../types';
import { IContainer } from './Container';

export const Container: React.FC<ReactChildren & IContainer> = ({
  children,
  component = 'div',
  direction = 'row',
  sx = {},
}) => {
  return (
    <Box component={component} sx={{ ...sx, flexDirection: direction }}>
      {children}
    </Box>
  );
};
