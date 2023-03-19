import { render } from '@testing-library/react';

import { Unauthorized } from '.';

describe('<Unauthorized>', () => {
  it('Snapshot Testing', () => {
    render(<Unauthorized />);
    expect(true).toBe(true)
  });
});
