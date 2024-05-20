import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Learn CICD text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn CICD/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Hello Sonar text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Sonar/i);
  expect(linkElement).toBeInTheDocument();
});
