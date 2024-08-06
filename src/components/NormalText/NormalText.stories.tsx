import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { NormalText } from '.'

const meta: Meta<typeof NormalText> = {
	title: 'Components/Typography/NormalText',
	component: NormalText,
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
	render: () => <NormalText>Storybook</NormalText>,
}
export default meta

type Story = StoryObj<typeof NormalText>

export const Basic: Story = {
	args: {},
}
