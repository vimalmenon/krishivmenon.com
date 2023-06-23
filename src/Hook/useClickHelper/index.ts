import React from 'react';

import { IGenericMethod, IGenericParam } from '@types';

import { IUseClickHelper } from './UseClickHelper';

export const useClickHelper = (
  singleClick: IGenericMethod,
  doubleClick: IGenericMethod
): IUseClickHelper => {
  const ref = React.useRef<NodeJS.Timeout>();
  const onClick: IGenericParam<React.MouseEvent<HTMLDivElement>> = (e) => {
    switch (e.detail) {
      case 1:
        ref.current = setTimeout(singleClick, 220);
        break;
      case 2:
        clearTimeout(ref.current);
        doubleClick();
        break;
    }
  };
  return {
    onClick,
  };
};
