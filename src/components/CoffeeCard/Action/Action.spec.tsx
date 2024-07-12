import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { Action } from '.'

describe('<Action/>', () => {
	const mockOnPress = jest.fn()

	afterEach(() => jest.clearAllMocks())

	it('should render the button correctly', () => {
		customRender(<Action onPress={mockOnPress} />)

		expect(screen.getByRole('button', { name: /Adicionar/i })).toBeOnTheScreen()
	})

	it('should call onPress prop correctly', async () => {
		customRender(<Action onPress={mockOnPress} />)

		const btn = screen.getByRole('button', { name: /Adicionar/i })
		await userEvent.press(btn)
		expect(mockOnPress).toHaveBeenCalled()
	})
})
