import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { Cover } from '.'

describe('<Cover/>', () => {
	it('should render', () => {
		customRender(<Cover />)

		expect(screen.getByRole('text', { name: /Cover/i })).toBeOnTheScreen()
	})
})
