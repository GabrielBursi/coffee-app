import { screen } from '@testing-library/react-native'

import { customRender } from '@/tests/utils'

import { CoffeeCard } from '@/components'
import { RatingProps } from './types'

describe('<CoffeeCard.Rating/>', () => {
	const props: RatingProps = {
		rating: 4.2,
		color: 'primaryText',
		max: 5,
		size: 'titleMedium',
		totalRanking: 200,
	}

	it('should render correctly', () => {
		customRender(
			<CoffeeCard>
				<CoffeeCard.Rating {...props} />
			</CoffeeCard>
		)

		expect(screen.getByRole('text', { name: '4.2' })).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: '(200)' })).toBeOnTheScreen()
	})

	it('should render without total correctly', () => {
		customRender(
			<CoffeeCard>
				<CoffeeCard.Rating rating={5} totalRanking={undefined} />
			</CoffeeCard>
		)

		expect(screen.getAllByRole('text')).toHaveLength(1)
		expect(screen.queryByRole('text', { name: '(200)' })).not.toBeOnTheScreen()
	})

	it('should render the rating equal max when it is bigger than max correctly', () => {
		customRender(
			<CoffeeCard>
				<CoffeeCard.Rating rating={10} size="titleSmall" />
			</CoffeeCard>
		)

		expect(screen.getByRole('text', { name: '5.0' })).toBeOnTheScreen()
	})
})
