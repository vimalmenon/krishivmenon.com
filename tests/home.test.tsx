import { render } from '@testing-library/react';

import Home from '../pages';

describe('<Home>', () => {
  it('Render Component', () => {
    render(<Home />);
    expect(true).toBe(true);
  });
});
