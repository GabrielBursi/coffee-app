/* eslint-disable react-native/no-raw-text */
import { Alert, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { useTheme } from 'styled-components/native'
import { lighten } from 'polished'
import { useQuery } from '@tanstack/react-query'

import { DropdownButton } from './DropdownButton'
import { DropdownItem } from './DropdownItem'

import * as S from './styles'

import { LocationServices } from '@/api/services'
import { LocationCity } from '@/types/api'

export const Location = () => {
	const theme = useTheme()

	const [locations, setLocations] = useState<string[]>([])
	const [defaultLocation, setDefaultLocation] = useState(0)

	const { data, error, isError, isFetched, isFetching, isSuccess } = useQuery({
		queryKey: ['city-location'],
		queryFn: () => LocationServices.GetCitiesByUF(41),
		staleTime: Infinity,
	})

	const formatLocationCity = useCallback((locationCity: LocationCity) => {
		const cityRegion = locationCity['regiao-imediata']
		const stateRegion = cityRegion['regiao-intermediaria']
		const cityName = cityRegion.nome
		const stateName = stateRegion.UF.nome
		return `${cityName}, ${stateName}`
	}, [])

	useEffect(() => {
		if (isFetched && (isError || !!error)) {
			Alert.alert(
				'Erro ao buscar os dados',
				'Ocorreu um erro ao buscar os dados.'
			)
			return
		}

		if (data instanceof Error) {
			Alert.alert('Erro ao buscar os dados', data.message)
			return
		}

		if (!!data && isFetched && !isError && isSuccess) {
			const lessData = data.filter((locationCity) => locationCity.id <= 4101150)
			const formattedLocations = lessData.map((locationCity) =>
				formatLocationCity(locationCity)
			)
			const locations = Array.from(new Set(formattedLocations))
			setLocations(locations)
		}
	}, [
		data,
		isFetched,
		isFetching,
		error,
		isError,
		isSuccess,
		formatLocationCity,
	])

	useEffect(() => {
		if (locations.length) setDefaultLocation(locations.length - 1)
	}, [locations])

	return (
		<S.Location>
			<S.Label
				variant="titleSmall"
				accessibilityLabel="Localização"
				accessibilityRole="text"
			>
				Localização
			</S.Label>
			<SelectDropdown
				data={locations}
				defaultValueByIndex={defaultLocation}
				disabled={isFetching}
				search
				searchPlaceHolder="Procure aqui"
				showsVerticalScrollIndicator={false}
				searchInputTxtColor={theme.colors.white}
				disableAutoScroll
				testID="location"
				onSelect={(_, index) => {
					setDefaultLocation(index)
				}}
				searchInputStyle={{
					backgroundColor: lighten(0.1, theme.colors.secondaryBg),
				}}
				dropdownStyle={{
					backgroundColor: theme.colors.secondaryBg,
					borderRadius: theme.border.radius.big,
				}}
				renderButton={(item, isOpen) => {
					return (
						<View>
							<DropdownButton location={item as string} isOpen={isOpen} />
						</View>
					)
				}}
				renderItem={(selectedItem, _index, isSelected) => {
					return (
						<View>
							<DropdownItem
								location={selectedItem as string}
								isSelected={isSelected}
							/>
						</View>
					)
				}}
			/>
		</S.Location>
	)
}
