import type { Meta, StoryObj } from '@storybook/react'
import { View } from 'react-native'

import { Location } from '.'
import { TestProvider } from '@/providers'
import { theme } from '@/styles'
import { Container } from '@/components'

const meta: Meta<typeof Location> = {
	title: 'Components/Location Dropdown/Location',
	component: Location,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {},
	argTypes: {},
	render: () => (
		<Container>
			<View style={{ backgroundColor: theme.colors.secondaryBg }}>
				<Location />
			</View>
		</Container>
	),
}
export default meta

type Story = StoryObj<typeof Location>

export const Basic: Story = {
	args: {},
}
