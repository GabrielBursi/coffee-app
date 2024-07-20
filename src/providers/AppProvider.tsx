import { StatusBar } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { PaperProvider } from 'react-native-paper'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { theme, themePaper } from '@/styles'

export const AppProvider = ({ children }: PropsWithChildren) => {
	const queryClient = new QueryClient()

	return (
		<NavigationContainer>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<PaperProvider theme={themePaper}>
						<SafeAreaProvider>
							<StatusBar
								barStyle="dark-content"
								backgroundColor="transparent"
							/>
							{children}
						</SafeAreaProvider>
					</PaperProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</NavigationContainer>
	)
}
