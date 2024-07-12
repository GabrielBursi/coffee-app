/* eslint-disable react-native/no-inline-styles */
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { CoffeeCard } from '@/components'
import { View } from 'react-native'

const meta: Meta<typeof CoffeeCard.Cover> = {
	title: 'Components/CoffeeCard/Cover',
	component: CoffeeCard.Cover,
	decorators: [
		(Story) => (
			<TestProvider>
				<CoffeeCard>
					<Story />
				</CoffeeCard>
			</TestProvider>
		),
	],
	args: {
		source: {
			uri: 'https://reactjs.org/logo-og.png',
		},
	},
	argTypes: {},
	render: (args) => (
		<View style={{ width: 80, height: 80 }}>
			<CoffeeCard.Cover {...args} />
		</View>
	),
}
export default meta

type Story = StoryObj<typeof CoffeeCard.Cover>

export const Basic: Story = {
	args: {},
}
