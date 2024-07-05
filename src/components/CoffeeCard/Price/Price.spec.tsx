import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { CoffeeCard } from '@/components'
import { PriceProps } from './types'

describe('<CoffeeCard.Price/>', () => {
	const props: PriceProps = {
		price: 4.5,
	}

	it('should render the formatted currency price correctly', () => {
		customRender(
			<CoffeeCard>
				<CoffeeCard.Price {...props} />
			</CoffeeCard>
		)

		expect(screen.getByRole('text', { name: 'R$ 4,50' })).toBeOnTheScreen()
	})
})
