import React from 'react'
import { render, screen, waitFor, getByTestId } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { fetchShow as mockFetchShow, fakeData } from './api/fetchShow.js'
import App from './App'

jest.mock('./api/fetchShow.js')

test('render displays loaded data',async () => {
  mockFetchShow.mockResolvedValueOnce(fakeData)
  const { getByText, getAllByText } = render(<App />)
  //await waitFor(() => {getByTestId(/dropdown/i)})
  
  await waitFor(() => {getByText(/select a season/i)})
  // const dropdown = screen.findByTestId(/dropdown/i)
  userEvent.click(getByText(/select a season/i))

  expect(getAllByText(/season /i)).toHaveLength(3)
  expect(mockFetchShow).toHaveBeenCalledTimes(1)

})