export interface IPhotos {
  name: string;
  url: string;
  metadata: Record<string, string>;
  createdDate: string;
}

export interface IFolder {
  name: string;
  metadata: Record<string, string>;
  photos: IPhotos[];
  createdDate: string;
  updatedDate: string;
}
