import { IFile, IGenericMethod, IGenericParam } from '@types';

export interface IFileAction {
  file: IFile;
  width?: number;
  height?: number;
  onViewFile: IGenericParam<IFile>;
  onFileMoveRequest: IGenericParam<IFile>;
  onFileDeleteRequest: IGenericParam<IFile>;
  onFileConvert: IGenericParam<IFile>;
  onFileEdit: IGenericMethod;
}
