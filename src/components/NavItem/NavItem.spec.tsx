import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { theme } from '@/styles'

import { NavItem } from '.'

describe('<NavItem/>', () => {
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
		const navItem = screen.getByRole('button', { name: 'Jest' })
		expect(navItem).toHaveAccessibilityState({ disabled: true, selected: true })
		expect(navItem).toBeDisabled()
	})
})
