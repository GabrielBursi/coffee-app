import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { Main } from '.'

describe('<Main/>', () => {
	it('should render', () => {
		customRender(<Main />)

		expect(screen.getByRole('text', { name: /Main/i })).toBeOnTheScreen()
	})
})
