import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'

import { theme } from '@/styles'

import { NavItem } from '.'

describe('<NavItem/>', () => {
	const mockOnPress = jest.fn()

	afterEach(() => jest.clearAllMocks())

	it('should render correctly', () => {
		customRender(<NavItem title="Jest" />)

		expect(screen.getByRole('button', { name: 'Jest' })).toBeOnTheScreen()
		expect(screen.getByRole('menuitem')).toBeOnTheScreen()
	})

	it('should render selected correctly', () => {
		customRender(<NavItem title="Jest" isSelected />)

		expect(screen.getByRole('menuitem')).toHaveStyle({
			backgroundColor: theme.colors.primary,
		})
		const navButton = screen.getByRole('button', { name: 'Jest' })
		expect(navButton).toHaveAccessibilityState({
			disabled: true,
			selected: true,
		})
		expect(navButton).toBeDisabled()
	})

	it('should press the item correctly', async () => {
		customRender(<NavItem title="Jest" onPress={mockOnPress} />)

		const navItem = screen.getByRole('button')
		await userEvent.press(navItem)
		expect(mockOnPress).toHaveBeenCalled()
	})
})
