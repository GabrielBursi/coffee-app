import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'

import { CoffeeCard } from '@/components'
import { TitleProps } from './types'

describe('<CoffeeCard.Title/>', () => {
	const props: TitleProps = {
		subtitle: 'Testing',
		title: 'Jest',
	}

	it('should render with the default title correctly', () => {
		customRender(
			<CoffeeCard>
				<CoffeeCard.Title {...props} />
			</CoffeeCard>
		)

		expect(screen.getByText(props.subtitle)).toBeOnTheScreen()
		expect(screen.getByText(props.title)).toBeOnTheScreen()
	})

	it('should render the small title correctly', () => {
		customRender(
			<CoffeeCard>
				<CoffeeCard.Title
					{...props}
					subtitleVariant="titleSmall"
					titleVariant="titleMedium"
				/>
			</CoffeeCard>
		)

		expect(screen.getByText(props.subtitle)).toBeOnTheScreen()
		expect(screen.getByText(props.title)).toBeOnTheScreen()
	})
})
