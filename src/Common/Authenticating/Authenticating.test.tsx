import { render, screen } from '@testing-library/react';

import { Authenticating } from '.';

describe('<Authenticating>', () => {
  it('Component: Message testing', () => {
    render(<Authenticating />);
    expect(screen.getByTestId('authenticating-message')).toHaveTextContent('Authenticating...');
  });
});
