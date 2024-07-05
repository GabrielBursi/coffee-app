import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { CoffeeCard } from '@/components'

const meta: Meta<typeof CoffeeCard.Price> = {
	title: 'Components/CoffeeCard/Price',
	component: CoffeeCard.Price,
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
		price: 25460.45,
	},
	argTypes: {
		price: {
			type: 'string',
		},
	},
}
export default meta

type Story = StoryObj<typeof CoffeeCard.Price>

export const Basic: Story = {
	args: {},
}
