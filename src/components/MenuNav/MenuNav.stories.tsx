import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'
import { mockMenuNav } from '@/tests/mocks'
import { Container } from '@/components'

import { MenuNav } from '.'

const meta: Meta<typeof MenuNav> = {
	title: 'Components/MenuNav',
	component: MenuNav,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {
		navItens: mockMenuNav,
	},
	argTypes: {
		navItens: {
			type: 'symbol',
		},
	},
	render: (args) => (
		<Container>
			<MenuNav {...args} />
		</Container>
	),
}
export default meta

type Story = StoryObj<typeof MenuNav>

export const Basic: Story = {
	args: {},
}
