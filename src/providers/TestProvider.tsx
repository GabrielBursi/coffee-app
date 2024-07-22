import { StatusBar } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { PaperProvider } from 'react-native-paper'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { theme, themePaper } from '@/styles'

export const TestProvider = ({ children }: PropsWithChildren) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				gcTime: 0,
				staleTime: 0,
			},
		},
	})

	return (
		<NavigationContainer>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<SafeAreaProvider
						initialMetrics={{
							frame: { x: 0, y: 0, width: 0, height: 0 },
							insets: { top: 0, left: 0, right: 0, bottom: 0 },
						}}
					>
						<PaperProvider theme={themePaper}>
							<StatusBar
								barStyle="dark-content"
								backgroundColor="transparent"
								translucent
							/>
							{children}
						</PaperProvider>
					</SafeAreaProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</NavigationContainer>
	)
}
