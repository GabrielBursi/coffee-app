import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'
import { mockCoffees } from '@/tests/mocks'
import { Container } from '@/components'

import { GridListCoffee } from '.'

const meta: Meta<typeof GridListCoffee> = {
	title: 'Components/GridListCoffee',
	component: GridListCoffee,
	decorators: [
		(Story) => (
			<TestProvider>
				<Container>
					<Story />
				</Container>
			</TestProvider>
		),
	],
	args: {
		coffees: [
			{ title: 'Storybook', data: mockCoffees.slice(0, 3) },
			{ title: 'Jest', data: mockCoffees.slice(3) },
		],
	},
	argTypes: {},
}
export default meta

type Story = StoryObj<typeof GridListCoffee>

export const Basic: Story = {
	args: {},
}
