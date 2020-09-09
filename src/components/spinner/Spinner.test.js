import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner', () => {
  test('display spinner', () => {
    const { getByTestId } = render(<Spinner />);
    const element = getByTestId('spinner');
    expect(element).toBeInTheDocument();
  });

  test('spinner contain 3 elements', () => {
    const { getByTestId } = render(<Spinner />);
    const element = getByTestId('spinner');
    expect(element.children.length).toBe(3);
  })
});

