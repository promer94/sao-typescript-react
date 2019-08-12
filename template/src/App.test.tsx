import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

afterEach(cleanup)

it('renders without crashing', () => {
  const { queryAllByText } = render(<App />)
  expect(queryAllByText('react is awesome')).toBeTruthy()
})
