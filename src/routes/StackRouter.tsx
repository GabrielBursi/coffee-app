import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParamList } from '@/types/routes'
import { HomeScreen, CoffeeScreen } from '@/screens/stack'

const Stack = createStackNavigator<RootStackParamList>()

export const StackRouter = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Home"
				component={HomeScreen}
			/>
			<Stack.Screen
				options={{
					headerBackAccessibilityLabel: 'Café',
					headerTitle: 'Café',
					headerTitleAlign: 'center',
					headerTransparent: true,
				}}
				name="Coffee"
				component={CoffeeScreen}
			/>
		</Stack.Navigator>
	)
}
