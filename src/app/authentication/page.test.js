import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AuthComponent from './page'

jest.mock('next/navigation')

jest.mock('mongoose', () => {
    return {
        Schema: jest.fn()
    }
})

describe('input', () => {

    test.each([
        ['unit', /unit no/i],
        ['password', /password/i],
        ['email', /email/i]
    ])('%s input should be empty', (_, placeholder) => {
        render(<AuthComponent />)
        const unitInp = screen.getByPlaceholderText(placeholder)
        expect(unitInp.value).toBe('')
    })

    test.each([
        ['unit', /unit no/i],
        ['password', /password/i],
        ['email', /email/i]
    ])('%s input should not be empty', (inputType, placeholder) => {
        render(<AuthComponent />);
        const btnEl = screen.getByText(/login/i);
        const unitInp = screen.getByPlaceholderText(placeholder);
        fireEvent.input(unitInp, { target: { value: 'test' } });
        fireEvent.submit(btnEl);
        expect(unitInp.value.length).toBeGreaterThan(0);
    });

})
