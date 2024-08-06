import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { Subtitle } from '.'

describe('<Subtitle/>', () => {
	it('should render correctly', () => {
		// eslint-disable-next-line react-native/no-raw-text
		customRender(<Subtitle>Jest</Subtitle>)

		expect(screen.getByRole('text', { name: /Jest/i })).toBeOnTheScreen()
	})
})
