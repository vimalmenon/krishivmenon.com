export interface ILocalStorageProvider {
  storage: Record<string, string>;
  setStorage: React.Dispatch<React.SetStateAction<ThemeType>>;
}
