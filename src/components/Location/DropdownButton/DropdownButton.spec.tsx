import { screen } from '@testing-library/react-native'

import { customRender } from '@/tests/utils'

import { DropdownButton } from '.'

describe('<DropdownButton/>', () => {
	it('should render the dropdown closed correctly', () => {
		customRender(<DropdownButton location="Jest" />)

		expect(screen.getByRole('text', { name: /jest/i })).toBeOnTheScreen()
		expect(
			screen.getByTestId('chevron-down', { hidden: true })
		).toBeOnTheScreen()
	})

	it('should render the dropdown opened correctly', () => {
		customRender(<DropdownButton location="Jest" isOpen />)

		expect(screen.getByTestId('chevron-up', { hidden: true })).toBeOnTheScreen()
	})
})
