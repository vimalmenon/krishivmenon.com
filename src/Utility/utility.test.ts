import { NotImplemented } from './index';

describe('Utility Files', () => {
  it('NotImplemented Method', () => {
    const t = (): void => {
      throw NotImplemented();
    };
    expect(t).toThrow('Function not implemented');
  });
});
