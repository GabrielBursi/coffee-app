import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { SearchCoffee } from '.'

describe('<SearchCoffee/>', () => {
	it('should render correctly', () => {
		customRender(<SearchCoffee />)

		expect(screen.getByRole('searchbox')).toBeOnTheScreen()
	})

	it('should change the value od input correctly', async () => {
		customRender(<SearchCoffee />)

		const searchbox = screen.getByRole('searchbox')
		await userEvent.type(searchbox, 'jest')
		expect(screen.getByRole('searchbox')).toHaveDisplayValue('jest')
	})

	it('should focus the input correctly', async () => {
		customRender(<SearchCoffee />)

		const searchButton = screen.getByRole('button', {
			name: 'Procure um café aqui',
		})
		await userEvent.press(searchButton)
		expect(screen.getByRole('searchbox')).toHaveAccessibilityState({
			selected: true,
		})
	})
})
