import React from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native-paper'

import { HomeScreenProps } from '@/types/screens'

import * as S from './styles'

export const HomeScreen = ({ navigation, route }: HomeScreenProps) => {
	return (
		<S.Home>
			<Text accessibilityRole="text">Home</Text>
			<Button onPress={() => navigation.push('Coffee', { coffeeId: 1 })}>
				Ir para Café
			</Button>
		</S.Home>
	)
}
