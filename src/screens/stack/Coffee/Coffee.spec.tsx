import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { CoffeeScreen } from '.'

describe('<CoffeeScreen/>', () => {
	it('should render', () => {
		customRender(<CoffeeScreen />)

		expect(screen.getByRole('text', { name: /Coffee/i })).toBeOnTheScreen()
	})
})
