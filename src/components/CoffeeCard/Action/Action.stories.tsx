import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { Action } from '.'

const meta: Meta<typeof Action> = {
	title: 'Components/CoffeeCard/Action',
	component: Action,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {
		onPress: () => console.log('press!'),
	},
	argTypes: {
		onPress: {
			type: 'symbol',
		},
	},
}
export default meta

type Story = StoryObj<typeof Action>

export const Basic: Story = {
	args: {},
}
