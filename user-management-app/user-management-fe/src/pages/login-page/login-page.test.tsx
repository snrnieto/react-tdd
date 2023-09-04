import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {LoginPage} from './login-page'

const getSubmitBtn = () => screen.getByRole('button', {name: /submit/i})

test('it should render the login page title', () => {
  render(<LoginPage />)
  expect(screen.getByRole('heading', {name: /login/i})).toBeInTheDocument()
})

test('it should render the form elements', () => {
  render(<LoginPage />)
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  expect(getSubmitBtn()).toBeInTheDocument()
})

test('it should validate the inputs as required', async () => {
  render(<LoginPage />)
  const button = getSubmitBtn()
  userEvent.click(button)
  expect(await screen.findByText(/the email is required/i)).toBeInTheDocument()
  expect(
    await screen.findByText(/the password is required/i),
  ).toBeInTheDocument()
})

test('it should validate email format', async () => {
  render(<LoginPage />)
  userEvent.type(screen.getByLabelText(/email/i), 'holamundo')
  userEvent.click(getSubmitBtn())
  expect(await screen.findByText(/the email is not valid/i)).toBeInTheDocument()
})
