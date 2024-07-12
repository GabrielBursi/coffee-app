import React, { memo, useState } from 'react'
import { Icon } from 'react-native-paper'
import { useTheme } from 'styled-components/native'

import * as S from './styles'
import { ActionProps } from './types'

const ActionMemoized = ({ onPress }: ActionProps) => {
	const theme = useTheme()

	const [isPressed, setIsPressed] = useState(false)

	return (
		<S.Action
			accessibilityHint="Adicionar café no carrinho"
			accessible
			accessibilityLabel="Adicionar"
			role="button"
			accessibilityRole="button"
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			onPress={onPress}
			isPressed={isPressed}
			style={{ elevation: theme.elevation.high }}
		>
			<Icon size={16} source="plus" color={theme.colors.white} />
		</S.Action>
	)
}

export const Action = memo(ActionMemoized)
