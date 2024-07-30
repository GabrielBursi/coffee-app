import React, { memo, useEffect, useState } from 'react'
import { FlatList, FlatListProps, ListRenderItem } from 'react-native'

import { MenuNavProps } from './types'
import * as S from './styles'
import { NavItemProps } from '../NavItem/types'

import { NavItem } from '@/components'

const MenuNavMemoized = ({ navItens }: MenuNavProps) => {
	const [itemsList, setItemsList] = useState<NavItemProps[]>([])

	const handlePress = (index: number) => {
		const newItems = itemsList.map((currentItem, currentIndex) => {
			if (currentIndex === index) {
				return { ...currentItem, isSelected: true }
			}
			return { ...currentItem, isSelected: false }
		})

		setItemsList(newItems)
	}

	const renderItem: ListRenderItem<NavItemProps> = ({ item, index }) => (
		<NavItem key={index} {...item} onPress={() => handlePress(index)} />
	)

	const keyExtractor: FlatListProps<NavItemProps>['keyExtractor'] = (
		item,
		index
	) => `${item.title}-${index}`

	useEffect(() => {
		if (navItens.length) setItemsList(navItens)
	}, [navItens])

	return (
		<FlatList
			data={itemsList}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			horizontal
			ItemSeparatorComponent={S.Separator}
			role="navigation"
			accessible
		/>
	)
}

export const MenuNav = memo(MenuNavMemoized)
