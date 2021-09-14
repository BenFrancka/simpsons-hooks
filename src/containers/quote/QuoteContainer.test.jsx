import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuote from './QuoteContainer';

const server = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          character: 'Homer',
          quote: 'Doh',
          image: 'https://example.com/png.',
        },
      ])
    );
  })
);

describe('SimpsonsQuote Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a button that loads a quote from the simpsons Api', async () => {
    render(<SimpsonsQuote />);

    const fetchButton = screen.getByRole('button', { name: 'Load Quote' });
    fireEvent.click(fetchButton);

    return waitFor(() => {
      screen.getByText('Doh');
      screen.getByText('Homer');
    });
  });
});
