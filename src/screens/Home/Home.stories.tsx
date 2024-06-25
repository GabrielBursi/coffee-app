import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { HomeScreen } from '.'

const meta: Meta<typeof HomeScreen> = {
	title: 'Screens/HomeScreen',
	component: HomeScreen,
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

type Story = StoryObj<typeof HomeScreen>

export const Basic: Story = {
	args: {},
}
