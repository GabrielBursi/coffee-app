import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { DropdownItem } from '.'

describe('<DropdownItem/>', () => {
	it('should render correctly', () => {
		customRender(<DropdownItem location="Jest" />)

		expect(screen.getByRole('text', { name: /jest/i })).toBeOnTheScreen()
		const item = screen.getByTestId('dropdown-item')
		expect(item).toHaveStyle({ backgroundColor: '#222222' })
	})

	it('should render the item selected correctly', () => {
		customRender(<DropdownItem location="Jest" isSelected />)

		const item = screen.getByTestId('dropdown-item')
		expect(item).toHaveStyle({ backgroundColor: '#3c3c3c' })
	})
})
