import { SubMainHome } from './submain'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

test('ranking div must display on screen', () => {
    render(<SubMainHome />)
    const rankElement = screen.getByTestId('rankdiv')
    expect(rankElement).toBeInTheDocument()
})

test('expect ranking list to be four', () => {
    render(<SubMainHome />)
    const rankElement = screen.getAllByTestId('ranklist')
    expect(rankElement).toHaveLength(4)
})

test('Characteristics must display on screen', () => {
    render(<SubMainHome />)
    const rankElement = screen.getByTestId('xteristics')
    expect(rankElement).toBeInTheDocument()
})



