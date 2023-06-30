import { IGenericParam, IGalleryFolder } from '@types';

export interface IGalleryFolder {
  folder: IGalleryFolder;
  isSelected: boolean;
}

export interface IUseClick {
  onClick: IGenericParam<React.MouseEvent<HTMLDivElement>>;
}

export interface IUseGalleryFolder {
  onFinalSingleClick: IGenericMethod;
  onFinalDoubleClick: IGenericMethod;
}
