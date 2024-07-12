import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { CoffeeCard } from '@/components'

describe('<CoffeeCard.Action/>', () => {
	const mockOnPress = jest.fn()

	afterEach(() => jest.clearAllMocks())

	it('should render the button correctly', () => {
		customRender(
			<CoffeeCard>
				<CoffeeCard.Action onPress={mockOnPress} />
			</CoffeeCard>
		)

		expect(screen.getByRole('button', { name: /Adicionar/i })).toBeOnTheScreen()
	})

	it('should call onPress prop correctly', async () => {
		customRender(
			<CoffeeCard>
				<CoffeeCard.Action onPress={mockOnPress} />
			</CoffeeCard>
		)

		const btn = screen.getByRole('button', { name: /Adicionar/i })
		await userEvent.press(btn)
		expect(mockOnPress).toHaveBeenCalled()
	})
})
