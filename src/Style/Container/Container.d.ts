import { ElementType } from 'react';

export interface IContainer {
  direction?: 'column' | 'row';
  sx?: any;
  component: ElementType<any>;
}
