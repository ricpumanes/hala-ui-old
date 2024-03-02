import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import App from "./App"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
})

test("Renders hello world", () => {
    render(<App />)
    expect(screen.getByText("hello world")).toBeInTheDocument();
})