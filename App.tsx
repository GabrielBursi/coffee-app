import React from 'react'
import Config from 'react-native-config'
import 'react-native-gesture-handler'

import StorybookUI from './.storybook'
import { RouterApp } from './src/routes'
import { AppProvider } from '@/providers'

function App(): React.JSX.Element {
	return (
		<AppProvider>
			<RouterApp />
		</AppProvider>
	)
}

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUI : App
