import { fireEvent, render, screen } from "@testing-library/react"
import { Navbar } from './navbar'

jest.mock('next/navigation')

test('nav links should be displayed on the screen', () => {
    render(<Navbar />)
    const liElement = screen.getAllByRole('listitem')
    expect(liElement).toHaveLength(4)
})

test('button should turn true', () => {
    const toggleState = {
        isNavToggle: false,
        handleToggle: jest.fn(),
    };

    render(<Navbar />)
    const buttonEl = screen.getByRole('button');
    fireEvent.click(buttonEl)
    expect(toggleState.handleToggle).toBeTruthy()
})