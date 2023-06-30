import { IFile, IGenericParam } from '@types';

export interface IFileAction {
  file: IFile;
  width?: number;
  height?: number;
  onFileEditSave: IGenericParam<IFile>;
  onViewFile: IGenericParam<IFile>;
  onFileMoveRequest: IGenericParam<IFile>;
  onFileDeleteRequest: IGenericParam<IFile>;
}
