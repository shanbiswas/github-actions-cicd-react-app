import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test(`renders 'Contact Us' text`, () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Contact Us/i);
  expect(linkElement).toBeInTheDocument();
});

test(`renders 'Thank you for reaching out to us' text`, () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Thank you for reaching out to us/i);
  expect(linkElement).toBeInTheDocument();
});
