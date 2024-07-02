import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { BagScreen } from '.'

describe('<BagScreen/>', () => {
	it('should render', () => {
		customRender(<BagScreen />)

		expect(screen.getByRole('text', { name: /Bag/i })).toBeOnTheScreen()
	})
})
