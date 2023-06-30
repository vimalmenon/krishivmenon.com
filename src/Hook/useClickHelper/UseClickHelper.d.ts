export interface IUseClickHelper<T> {
  onClick: (e: React.MouseEvent<HTMLDivElement>, value: T) => void;
}
