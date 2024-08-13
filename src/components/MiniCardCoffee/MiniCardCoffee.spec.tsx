import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { MiniCardCoffee } from '.'
import { MiniCardCoffeeProps } from './types'

describe('<MiniCardCoffee/>', () => {
	const props: MiniCardCoffeeProps = {
		cover: { uri: 'jest' },
		price: 15.25,
		subtitle: 'Storybook',
		title: 'React testing library',
	}

	const mockOnAddCard = jest.fn()

	afterEach(() => jest.clearAllMocks())

	it('should render correctly', () => {
		customRender(<MiniCardCoffee {...props} />)

		expect(
			screen.getByRole('listitem', { name: props.title })
		).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: `R$ 15,25` })).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: props.subtitle })).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: props.title })).toBeOnTheScreen()
		expect(
			screen.getByRole('button', { name: 'Adicionar carrinho' })
		).toBeOnTheScreen()
		expect(screen.getByRole('img', { name: 'cover-coffee' })).toHaveProp(
			'source',
			props.cover
		)
	})

	it('should call onAddCart correctly', async () => {
		customRender(<MiniCardCoffee {...props} onAddCart={mockOnAddCard} />)

		await userEvent.press(
			screen.getByRole('button', { name: 'Adicionar carrinho' })
		)
		expect(mockOnAddCard).toHaveBeenCalled()
	})
})
