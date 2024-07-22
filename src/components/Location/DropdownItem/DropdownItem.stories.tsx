import type { Meta, StoryObj } from '@storybook/react'

import { DropdownItem } from '.'
import { TestProvider } from '@/providers'
import { Container } from '@/components'

const meta: Meta<typeof DropdownItem> = {
	title: 'Components/Location Dropdown/Dropdown Item',
	component: DropdownItem,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {
		isSelected: false,
		location: 'Storybook',
	},
	argTypes: {},
	render: (args) => (
		<Container>
			<DropdownItem {...args} />
		</Container>
	),
}
export default meta

type Story = StoryObj<typeof DropdownItem>

export const Basic: Story = {
	args: {},
}

export const Selected: Story = {
	args: {
		isSelected: true,
	},
}
