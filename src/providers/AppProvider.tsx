import { StatusBar } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { PaperProvider } from 'react-native-paper'

import { theme, themePaper } from '@/styles'
import { Container } from '@/components'

export const AppProvider = ({ children }: PropsWithChildren) => {
	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<SafeAreaProvider>
					<PaperProvider theme={themePaper}>
						<StatusBar
							barStyle="dark-content"
							backgroundColor="transparent"
							translucent
						/>
						<Container>{children}</Container>
					</PaperProvider>
				</SafeAreaProvider>
			</ThemeProvider>
		</NavigationContainer>
	)
}
