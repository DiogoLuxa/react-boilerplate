import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders a heading', () => {
        render(<App />);
        const heading = screen.getByRole('heading', {
            name: /my first react app/i,
        });
        expect(heading).toBeInTheDocument();
    });
});
