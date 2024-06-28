import { StatusBar } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { PaperProvider } from 'react-native-paper'

import { theme, themePaper } from '@/styles'

export const TestProvider = ({ children }: PropsWithChildren) => {
	return (
		<NavigationContainer>
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
		</NavigationContainer>
	)
}
