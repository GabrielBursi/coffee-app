import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { CoffeeCard } from '@/components'

const meta: Meta<typeof CoffeeCard> = {
	title: 'Components/CoffeeCard/Compound',
	component: CoffeeCard,
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

type Story = StoryObj<typeof CoffeeCard>

export const Basic: Story = {
	args: {},
}
