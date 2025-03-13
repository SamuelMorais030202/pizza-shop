import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SiginIn } from './sign-in'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import { HelmetProvider } from 'react-helmet-async'

describe('SignIn', () => {
  it('should set default email input value if email is present on search params', () => {
    const wrapper = render(<SiginIn />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter initialEntries={['/sign-in?email=johdoe@example.com']}>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        )
      }
    })

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement
    expect(emailInput.value).toEqual('johdoe@example.com')
  })
})
