import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();

  })
  it('should display correct', () => {
    render(<App />);
    screen.getByLabelText(/username/i)
    screen.getByRole('button', { name: /submit/i })
  });

  it('should call  "handleSubmit" with text input when submitted', () => {
    console.log = jest.fn();
    render(<App />);
    userEvent.type(screen.getByLabelText(/username/i), 'user')
    userEvent.click(screen.getByRole('button', { name: /submit/i }))
    expect(console.log).toHaveBeenCalledWith('user');
  })
})

