import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { NavItem } from '.'
import { Container } from '../Container'

const meta: Meta<typeof NavItem> = {
	title: 'Components/NavItem',
	component: NavItem,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {
		title: 'Storybook',
		isSelected: false,
	},
	argTypes: {},
	render: (args) => (
		<Container>
			<NavItem {...args} />
		</Container>
	),
}
export default meta

type Story = StoryObj<typeof NavItem>

export const Basic: Story = {
	args: {},
}

export const Selected: Story = {
	args: {
		isSelected: true,
	},
}
