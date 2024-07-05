import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { CoffeeCard } from '@/components'

const meta: Meta<typeof CoffeeCard.Title> = {
	title: 'Components/CoffeeCard/Title',
	component: CoffeeCard.Title,
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
		subtitle: 'Your component',
		title: 'Storybook',
	},
	argTypes: {},
}
export default meta

type Story = StoryObj<typeof CoffeeCard.Title>

export const Basic: Story = {
	args: {},
}

export const SmallVariante: Story = {
	name: 'Small text size',
	args: {
		subtitleVariant: 'titleSmall',
		titleVariant: 'titleMedium',
	},
}
