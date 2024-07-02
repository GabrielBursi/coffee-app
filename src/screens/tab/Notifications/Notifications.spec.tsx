import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { NotificationsScreen } from '.'

describe('<NotificationsScreen/>', () => {
	it('should render', () => {
		customRender(<NotificationsScreen />)

		expect(
			screen.getByRole('text', { name: /Notifications/i })
		).toBeOnTheScreen()
	})
})
