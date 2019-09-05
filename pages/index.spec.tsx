import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Home from './index';

describe('index', () => {

  it('should render', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Toggle occupancy')).toBeInTheDocument();
  });
});
