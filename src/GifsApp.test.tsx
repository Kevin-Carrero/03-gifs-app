import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { GifsApp } from './GifsApp'

describe('GifsApps', () => {
    test('should render component properly', () => {
        const { container } = render(<GifsApp />)

        expect(container).toMatchSnapshot();
    })
})