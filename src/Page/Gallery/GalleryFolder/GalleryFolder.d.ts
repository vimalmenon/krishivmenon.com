import { IGenericParam } from '@types';

import { IGalleryFolder } from '../Gallery';

export interface IGalleryFolder {
  folder: IGalleryFolder;
}

export interface IUseClick {
  onClick: IGenericParam<React.MouseEvent<HTMLDivElement>>;
}

export interface IUseGalleryFolder {
  onFinalSingleClick: IGenericMethod;
  onFinalDoubleClick: IGenericMethod;
}
