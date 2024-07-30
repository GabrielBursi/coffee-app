import { screen, userEvent } from '@testing-library/react-native'
import { customRender } from '@/tests/utils'
import { mockMenuNav } from '@/tests/mocks'

import { MenuNav } from '.'

describe('<MenuNav/>', () => {
	it('should render correctly', () => {
		customRender(<MenuNav navItens={mockMenuNav} />)

		expect(screen.getByRole('navigation')).toBeOnTheScreen()
		expect(screen.getAllByRole('menuitem')).toHaveLength(mockMenuNav.length)
	})

	it('should render with no items correctly', () => {
		customRender(<MenuNav navItens={[]} />)

		expect(screen.queryAllByRole('menuitem')).toHaveLength(0)
	})

	it('should select a item correctly', async () => {
		customRender(<MenuNav navItens={mockMenuNav} />)

		const itens = screen.getAllByRole('button', {
			selected: false,
			disabled: false,
		})
		expect(itens).toHaveLength(mockMenuNav.length)
		await userEvent.press(itens[0])
		const newItens = screen.getAllByRole('button', {
			selected: true,
		})
		expect(newItens).toHaveLength(1)
	})

	it('should only select one item correctly', async () => {
		customRender(<MenuNav navItens={mockMenuNav} />)

		const itens = screen.getAllByRole('button', {
			selected: false,
			disabled: false,
		})
		await userEvent.press(itens[0])
		await userEvent.press(itens[1])
		await userEvent.press(itens[2])
		const newItens = screen.getAllByRole('button', {
			selected: true,
		})
		expect(newItens).toHaveLength(1)
	})
})
