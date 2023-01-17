export interface IPhotos {
  title: string;
  url: string;
  createdDate: string;
}

export interface IFolder {
  name: string;
  metadata: Record<string, string>;
  photos: IPhotos[];
  createdDate: string;
  updatedDate: string;
}
