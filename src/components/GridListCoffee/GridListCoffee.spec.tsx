import { screen } from '@testing-library/react-native'

import { customRender } from '@/tests/utils'
import { mockCoffees } from '@/tests/mocks'

import { GridListCoffeeProps } from './types'
import { GridListCoffee } from '.'

describe('<GridListCoffee/>', () => {
	const props: GridListCoffeeProps = {
		coffees: [{ title: 'Jest', data: mockCoffees }],
	}

	it('should render correctly', () => {
		customRender(<GridListCoffee {...props} />)

		expect(screen.getByRole('list')).toBeOnTheScreen()
		expect(screen.getAllByRole('listitem')).toHaveLength(
			props.coffees[0].data.length
		)
		expect(
			screen.getByText(`${props.coffees[0].title}`, { exact: true })
		).toBeOnTheScreen()
	})
})
