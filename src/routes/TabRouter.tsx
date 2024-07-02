import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-paper'
import { useTheme } from 'styled-components/native'

import { StackRouter } from './StackRouter'

import { RootTabParamList } from '@/types/routes'
import { BagScreen, FavoritesScreen, NotificationsScreen } from '@/screens/tab'

const Tab = createBottomTabNavigator<RootTabParamList>()

export const TabRouter = () => {
	const theme = useTheme()

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					position: 'absolute',
					backgroundColor: theme.colors.mainBg,
					elevation: theme.elevation.medium,
					shadowColor: theme.colors.shadow,
					borderTopLeftRadius: theme.border.radius.huge,
					borderTopRightRadius: theme.border.radius.huge,
				},
			}}
		>
			<Tab.Screen
				options={{
					headerShown: false,
					tabBarShowLabel: false,
					tabBarAccessibilityLabel: 'Home',
					tabBarIcon: ({ focused }) => (
						<Icon
							size={focused ? theme.spacings.large : theme.spacings.medium}
							source={focused ? 'home' : 'home-outline'}
							color={focused ? theme.colors.primary : theme.colors.primaryText}
							testID="Home"
						/>
					),
				}}
				name="HomeStack"
				component={StackRouter}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
					tabBarAccessibilityLabel: 'Favoritos',
					tabBarIcon: ({ focused }) => (
						<Icon
							size={focused ? theme.spacings.large : theme.spacings.medium}
							source={focused ? 'heart' : 'heart-outline'}
							color={focused ? theme.colors.primary : theme.colors.primaryText}
							testID="Favorites"
						/>
					),
					tabBarBadge: 1,
					tabBarBadgeStyle: {
						backgroundColor: theme.colors.secondary,
						color: theme.colors.primaryText,
					},
					headerTitle: 'Favoritos',
					headerTitleAlign: 'center',
					headerTransparent: true,
				}}
				name="Favorites"
				component={FavoritesScreen}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
					tabBarAccessibilityLabel: 'Sacola',
					tabBarIcon: ({ focused }) => (
						<Icon
							size={focused ? theme.spacings.large : theme.spacings.medium}
							source={focused ? 'shopping' : 'shopping-outline'}
							color={focused ? theme.colors.primary : theme.colors.primaryText}
							testID="Bag"
						/>
					),
					tabBarBadge: 1,
					tabBarBadgeStyle: {
						backgroundColor: theme.colors.secondary,
						color: theme.colors.primaryText,
					},
					headerTitle: 'Sacola',
					headerTitleAlign: 'center',
					headerTransparent: true,
				}}
				name="Bag"
				component={BagScreen}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
					tabBarAccessibilityLabel: 'Notificações',
					tabBarIcon: ({ focused }) => (
						<Icon
							size={focused ? theme.spacings.large : theme.spacings.medium}
							source={focused ? 'bell' : 'bell-outline'}
							color={focused ? theme.colors.primary : theme.colors.primaryText}
							testID="Notifications"
						/>
					),
					tabBarBadge: 1,
					tabBarBadgeStyle: {
						backgroundColor: theme.colors.secondary,
						color: theme.colors.primaryText,
					},
					headerTitle: 'Notificações',
					headerTitleAlign: 'center',
					headerTransparent: true,
				}}
				name="Notifications"
				component={NotificationsScreen}
			/>
		</Tab.Navigator>
	)
}
