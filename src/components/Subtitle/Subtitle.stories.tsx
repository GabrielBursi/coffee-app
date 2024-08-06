import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { Subtitle } from '.'

const meta: Meta<typeof Subtitle> = {
	title: 'Components/Typography/Subtitle',
	component: Subtitle,
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
	render: () => <Subtitle>Storybook</Subtitle>,
}
export default meta

type Story = StoryObj<typeof Subtitle>

export const Basic: Story = {
	args: {},
}
