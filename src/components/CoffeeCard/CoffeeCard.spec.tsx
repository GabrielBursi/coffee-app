import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { CoffeeCard } from '.'

describe('<CoffeeCard/>', () => {
	it('should render', () => {
		customRender(<CoffeeCard />)

		expect(screen.getByRole('text', { name: /CoffeeCard/i })).toBeOnTheScreen()
	})
})
