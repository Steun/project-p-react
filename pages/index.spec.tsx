import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Home from './index';

describe('index', () => {
  it('should render', () => {
    const mockComponent = () => <p>Test app</p>;

    const { getByText } = render(<Home Component={mockComponent} />);

    expect(getByText('Test app')).toBeInTheDocument();
  });
});
