/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react'
import { TextInput } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { useTheme } from 'styled-components/native'

export const SearchCoffee = () => {
	const theme = useTheme()
	const [valueSearch, setValueSearch] = useState('')
	const [isFocused, setIsFocused] = useState(false)
	const searchRef = useRef<TextInput | null>(null)

	return (
		<Searchbar
			placeholder="Procure um café aqui"
			searchAccessibilityLabel="Procure um café aqui"
			elevation={theme.elevation.medium}
			testID="search-coffee"
			value={valueSearch}
			onChangeText={(value) => setValueSearch(value)}
			ref={searchRef}
			onIconPress={() => {
				searchRef.current?.focus()
				setIsFocused(true)
			}}
			onBlur={() => setIsFocused(false)}
			style={{
				backgroundColor: theme.colors.secondaryBg,
				borderRadius: theme.border.radius.big,
				flex: 1,
			}}
			inputStyle={{ color: theme.colors.secondaryText }}
			iconColor={theme.colors.secondaryText}
			placeholderTextColor={theme.colors.secondaryText}
			accessibilityLabel="Procure um café aqui"
			accessible
			inputMode="text"
			role="searchbox"
			accessibilityHint="Procurar café"
			autoCapitalize="words"
			focusable
			accessibilityState={{
				selected: isFocused,
			}}
		/>
	)
}
