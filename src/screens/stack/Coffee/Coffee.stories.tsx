import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { CoffeeScreen } from '.'

const meta: Meta<typeof CoffeeScreen> = {
	title: 'Screens/CoffeeScreen',
	component: CoffeeScreen,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {},
	argTypes: {},
}
export default meta

type Story = StoryObj<typeof CoffeeScreen>

export const Basic: Story = {
	args: {},
}
