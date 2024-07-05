import React from 'react'
import { Text } from 'react-native'

import { NotificationsScreenProps } from '@/types/screens'

import * as S from './styles'

export const NotificationsScreen = ({
	navigation,
	route,
}: NotificationsScreenProps) => {
	return (
		<S.Notifications>
			<Text accessibilityRole="text">Notifications</Text>
		</S.Notifications>
	)
}
