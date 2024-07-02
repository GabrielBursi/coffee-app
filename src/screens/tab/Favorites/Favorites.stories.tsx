import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { FavoritesScreen } from '.'

const meta: Meta<typeof FavoritesScreen> = {
	title: 'Screens/FavoritesScreen',
	component: FavoritesScreen,
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

type Story = StoryObj<typeof FavoritesScreen>

export const Basic: Story = {
	args: {},
}
