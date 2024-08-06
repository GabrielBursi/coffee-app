import { screen } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { Title } from '.'

describe('<Title/>', () => {
	it('should render correctly', () => {
		// eslint-disable-next-line react-native/no-raw-text
		customRender(<Title>Jest</Title>)

		expect(screen.getByRole('text', { name: /Jest/i })).toBeOnTheScreen()
	})
})
