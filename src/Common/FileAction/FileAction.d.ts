import { IFile, IGenericParam } from '@types';

export interface IFileAction {
  file: IFile;
  height?: number;
  width?: number;
  onViewFile: IGenericParam<IFile>;
  onFileMoveRequest: IGenericParam<IFile>;
  onFileDeleteRequest: IGenericParam<IFile>;
}
