import { ElementType } from 'react';

import { SxProps, Theme } from '@mui/material';
export interface IContainer {
  direction?: 'column' | 'row';
  sx?: SxProps<Theme>;
  component: ElementType;
  display?: 'flex' | 'block' | 'inline';
}
