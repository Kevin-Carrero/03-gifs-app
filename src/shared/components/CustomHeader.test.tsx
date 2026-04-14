import { describe, test, expect, expectTypeOf } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe('CustomHeader', () => {

    const title = 'Test Title';

    test('should render the correct title', () => {

        render(<CustomHeader title={title} />)

        expect(screen.getByText(title)).toBeDefined();
    })

    test('should render the description when provided', () => {

        const description = 'Test Description';
        render(<CustomHeader title={title} description={description} />)

        expect(screen.getByText(description)).toBeDefined();

    })

    test('should not render the description when not provided', () => {

        // container = render()
        const { container } = render(<CustomHeader title="Test Title" />)

        const divElement = container.querySelector('.content-center');

        expect(divElement?.textContent).toBe(title);

        const p = divElement?.querySelector('p');
        expect(p).toBeNull();
    })


})