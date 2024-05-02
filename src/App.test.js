import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Learn CICD text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn CICD/i);
  expect(linkElement).toBeInTheDocument();
});
