import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { CoffeeCard } from '@/components'

const meta: Meta<typeof CoffeeCard.Action> = {
	title: 'Components/CoffeeCard/Action',
	component: CoffeeCard.Action,
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

type Story = StoryObj<typeof CoffeeCard.Action>

export const Basic: Story = {
	args: {},
}
