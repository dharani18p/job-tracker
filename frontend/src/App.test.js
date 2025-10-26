// frontend/src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Wrap the App component in BrowserRouter for testing
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

test('renders app header', () => {
  renderWithRouter(<App />);
  const headerElement = screen.getByText(/Job Application Tracker/i);
  expect(headerElement).toBeInTheDocument();
});