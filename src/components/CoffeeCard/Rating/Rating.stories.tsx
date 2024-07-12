/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { CoffeeCard } from '@/components'

const meta: Meta<typeof CoffeeCard.Rating> = {
	title: 'Components/CoffeeCard/Rating',
	component: CoffeeCard.Rating,
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
		color: 'primaryText',
		max: 5,
		rating: 4.6,
		size: 'titleMedium',
		totalRanking: 230,
	},
	argTypes: {},
}
export default meta

type Story = StoryObj<typeof CoffeeCard.Rating>

export const Basic: Story = {
	args: {},
}

export const Small: Story = {
	args: {
		color: 'white',
		size: 'titleSmall',
		totalRanking: undefined,
	},
	render: (args) => (
		<View style={{ backgroundColor: 'black' }}>
			<CoffeeCard.Rating {...args} />
		</View>
	),
}
