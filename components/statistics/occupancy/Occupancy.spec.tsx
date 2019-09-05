import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import Occupancy from "./Occupancy";

describe('Occupancy component', () => {

    it('should render', () => {
        const { getByText } = render(<Occupancy occupied={false} />);
        expect(getByText('Occupied:')).toBeInTheDocument();
    });

    it('should render when occupied is false', () => {
        const { getByText } = render(<Occupancy occupied={false} />);
        expect(getByText('No')).toBeInTheDocument();
    });

    it('should render when occupied is true', () => {
        const { getByText } = render(<Occupancy occupied={true} />);
        expect(getByText('Yes')).toBeInTheDocument();
    });
});
