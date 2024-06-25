import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { Main } from '.'

const meta: Meta<typeof Main> = {
	title: 'Main',
	component: Main,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
}
export default meta

type Story = StoryObj<typeof Main>

export const Basic: Story = {
	args: {},
}
