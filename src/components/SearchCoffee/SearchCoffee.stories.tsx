import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'
import { Container } from '@/components'

import { SearchCoffee } from '.'

const meta: Meta<typeof SearchCoffee> = {
	title: 'Components/SearchCoffee',
	component: SearchCoffee,
	decorators: [
		(Story) => (
			<TestProvider>
				<Container>
					<Story />
				</Container>
			</TestProvider>
		),
	],
	args: {},
	argTypes: {},
}
export default meta

type Story = StoryObj<typeof SearchCoffee>

export const Basic: Story = {
	args: {},
}
