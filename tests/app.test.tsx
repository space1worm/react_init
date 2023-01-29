import { render, screen } from '@testing-library/react';

import App from '../src/App';

describe('App', () => {
    it('renders headline', () => {
        render(<App />);
        const heading = screen.getByText('Vite + React');
        expect(heading).toBeInTheDocument();
    });
});