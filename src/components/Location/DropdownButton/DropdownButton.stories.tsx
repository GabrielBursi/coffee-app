import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { DropdownButton } from '.'

import { TestProvider } from '@/providers'
import { theme } from '@/styles'

const meta: Meta<typeof DropdownButton> = {
	title: 'Components/Location Dropdown/Dropdown Button',
	component: DropdownButton,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {
		isOpen: false,
		location: 'Storybook',
	},
	argTypes: {},
	render: (args) => (
		<View style={{ backgroundColor: theme.colors.secondaryBg }}>
			<DropdownButton {...args} />
		</View>
	),
}
export default meta

type Story = StoryObj<typeof DropdownButton>

export const Basic: Story = {
	args: {},
}

export const Open: Story = {
	args: {
		isOpen: true,
	},
}
