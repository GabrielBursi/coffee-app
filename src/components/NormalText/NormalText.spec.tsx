import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { NormalText } from '.'

describe('<NormalText/>', () => {
	it('should render correctly', () => {
		// eslint-disable-next-line react-native/no-raw-text
		customRender(<NormalText>Jest</NormalText>)

		expect(screen.getByRole('text', { name: /Jest/i })).toBeOnTheScreen()
	})
})
