import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { FavoritesScreen } from '.'

describe('<FavoritesScreen/>', () => {
	it('should render', () => {
		customRender(<FavoritesScreen />)

		expect(screen.getByRole('text', { name: /Favorites/i })).toBeOnTheScreen()
	})
})
