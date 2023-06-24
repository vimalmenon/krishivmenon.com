import React from 'react';

import { IGenericParam } from '@types';

import { IUseClickHelper } from './UseClickHelper';

export const useClickHelper = <T = unknown>(
  singleClick: IGenericParam<T>,
  doubleClick: IGenericParam<T>
): IUseClickHelper<T> => {
  const ref = React.useRef<NodeJS.Timeout>();
  const onClick = (e: React.MouseEvent<HTMLDivElement>, value: T) => {
    switch (e.detail) {
      case 1:
        ref.current = setTimeout(singleClick, 220, value);
        break;
      case 2:
        clearTimeout(ref.current);
        doubleClick(value);
        break;
    }
  };
  return {
    onClick,
  };
};
