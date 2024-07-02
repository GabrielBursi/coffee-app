import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { BagScreen } from '.'

const meta: Meta<typeof BagScreen> = {
	title: 'Screens/BagScreen',
	component: BagScreen,
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

type Story = StoryObj<typeof BagScreen>

export const Basic: Story = {
	args: {},
}
