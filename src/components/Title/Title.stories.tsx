import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { Title } from '.'

const meta: Meta<typeof Title> = {
	title: 'Components/Typography/Title',
	component: Title,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {},
	argTypes: {},
	// eslint-disable-next-line react-native/no-raw-text
	render: () => <Title>Storybook</Title>,
}
export default meta

type Story = StoryObj<typeof Title>

export const Basic: Story = {
	args: {},
}
