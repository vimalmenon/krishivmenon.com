import { render, screen } from '@testing-library/react';

import { Unauthorized } from '.';

describe('<Unauthorized>', () => {
  it('Unauthorized message', async () => {
    render(<Unauthorized />);
    expect(screen.getByTestId("unauthorized-message")).toHaveTextContent("You are not authorized to this website.")
  });
});
