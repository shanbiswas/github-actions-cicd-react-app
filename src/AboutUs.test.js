import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

test(`renders 'new line' text`, () => {
  render(<AboutUs />);
  const linkElement = screen.getByText(/New line/i);
  expect(linkElement).toBeInTheDocument();
});
