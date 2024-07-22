import { screen, waitFor } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { LocationServices } from '@/api/services'
import { Location } from '.'

describe('<Location/>', () => {
	const spyGetLocation = jest.spyOn(LocationServices, 'GetCitiesByUF')

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should render correctly', async () => {
		customRender(<Location />)

		await waitFor(() => {
			expect(
				screen.getByRole('text', { name: 'Localização' })
			).toBeOnTheScreen()
		})
	})

	it('should render with default value', async () => {
		customRender(<Location />)

		await waitFor(() => {
			expect(
				screen.getByText('Maringá, Paraná', { exact: true })
			).toBeOnTheScreen()
		})
	})

	it('should call the API correctly', async () => {
		customRender(<Location />)

		await waitFor(() => {
			expect(spyGetLocation).toHaveBeenCalledWith(41)
		})
	})
})
