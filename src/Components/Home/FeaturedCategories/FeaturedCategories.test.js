import { render, screen } from '@testing-library/react';
import { FeaturedCategories } from './FeaturedCategories';

test('renders learn react link', () => {
  render(<FeaturedCategories />);
  const linkElement = screen.getByText(/Feature Categories/i);
  expect(linkElement).toBeInTheDocument();
});
