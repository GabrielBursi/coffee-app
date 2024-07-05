import React from 'react'
import { Text } from 'react-native'

import { FavoritesScreenProps } from '@/types/screens'

import * as S from './styles'

export const FavoritesScreen = ({
	navigation,
	route,
}: FavoritesScreenProps) => {
	return (
		<S.Favorites>
			<Text accessibilityRole="text">Favorites</Text>
		</S.Favorites>
	)
}
