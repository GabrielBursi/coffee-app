/* eslint-disable react-native/no-inline-styles */
import type { Meta, StoryObj } from '@storybook/react'
import { TestProvider } from '@/providers'

import { MiniCardCoffee } from '.'
import { View } from 'react-native'
import { theme } from '@/styles'
import { Container } from '../Container'

const meta: Meta<typeof MiniCardCoffee> = {
	title: 'Components/MiniCardCoffee',
	component: MiniCardCoffee,
	decorators: [
		(Story) => (
			<TestProvider>
				<View
					style={{
						backgroundColor: theme.colors.mainBg,
						flex: 1,
						paddingTop: theme.spacings.medium,
					}}
				>
					<Container>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								gap: 10,
							}}
						>
							<Story />
							<Story />
						</View>
					</Container>
				</View>
			</TestProvider>
		),
	],
	args: {
		price: 20.5,
		subtitle: 'Storybook',
		title: 'React testing library',
		onAddCart: () => console.log('add!'),
		cover: {
			uri: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png',
		},
	},
	argTypes: {},
}
export default meta

type Story = StoryObj<typeof MiniCardCoffee>

export const Basic: Story = {
	args: {},
}
