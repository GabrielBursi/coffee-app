import React, { memo } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useTheme } from 'styled-components/native'

import { NormalText, Subtitle } from '@/components'
import { useFormat } from '@/hooks'

import { MiniCardCoffeeProps } from './types'
import * as S from './styles'

const MiniCardCoffeeMemoized = ({
	price,
	subtitle,
	title,
	cover,
	onAddCart,
}: MiniCardCoffeeProps) => {
	const { formatCurrency } = useFormat()
	const theme = useTheme()

	return (
		<S.MiniCardCoffee style={{ elevation: theme.elevation.medium }}>
			<S.Cover
				accessible
				role="img"
				aria-label="cover-coffee"
				accessibilityLabel="cover-coffee"
				alt="cover-coffee"
				resizeMode="cover"
				source={cover}
			/>
			<S.Header>
				<Subtitle>{title}</Subtitle>
				<NormalText>{subtitle}</NormalText>
			</S.Header>
			<S.Footer>
				<Subtitle>{formatCurrency(price)}</Subtitle>
				<S.ButtonStyled
					mode="contained"
					dark
					accessibilityHint="Adiciona café no carrinho"
					accessibilityLabel="Adicionar carrinho"
					compact
					onPress={onAddCart}
				>
					<Icon
						name="plus"
						role="img"
						accessibilityLabel="Adicionar carrinho"
						accessible
						size={20}
					/>
				</S.ButtonStyled>
			</S.Footer>
		</S.MiniCardCoffee>
	)
}

export const MiniCardCoffee = memo(MiniCardCoffeeMemoized)
