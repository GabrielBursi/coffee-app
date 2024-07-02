import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { NotificationsScreen } from '.'

const meta: Meta<typeof NotificationsScreen> = {
	title: 'Screens/NotificationsScreen',
	component: NotificationsScreen,
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

type Story = StoryObj<typeof NotificationsScreen>

export const Basic: Story = {
	args: {},
}
