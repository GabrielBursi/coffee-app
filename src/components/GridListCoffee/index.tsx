import React, { memo } from 'react'
import { SectionGrid } from 'react-native-super-grid'
import { useTheme } from 'styled-components/native'

import { MiniCardCoffee, Subtitle } from '@/components'

import { GridListCoffeeProps } from './types'

const GridListCoffeeMemoized = ({ coffees }: GridListCoffeeProps) => {
	const theme = useTheme()

	return (
		<SectionGrid
			sections={coffees}
			renderItem={({ item }) => <MiniCardCoffee {...item} />}
			renderSectionHeader={({ section }) => (
				<Subtitle>{section.title}</Subtitle>
			)}
			spacing={theme.spacings.small}
			maxItemsPerRow={2}
			keyExtractor={(item, index) => `${item.title}-${index}`}
			showsVerticalScrollIndicator={false}
			role="list"
			accessibilityRole="list"
			accessible
		/>
	)
}

export const GridListCoffee = memo(GridListCoffeeMemoized)
