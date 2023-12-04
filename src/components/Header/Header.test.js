import Header from './Header'
import { render, screen } from '@testing-library/react';

it('tests if header is loading correctly', () => {
    render(<Header />)
    expect(screen.getByText('HYRULE COMPENDIUM')).toBeInTheDocument()
})