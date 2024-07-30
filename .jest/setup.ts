import '@testing-library/react-native/extend-expect'
import '@testing-library/jest-native/extend-expect'
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

import { serverApiTest } from '@/tests/server'

jest.mock('react-native-reanimated', () => {
	const Reanimated = require('react-native-reanimated/mock')
	Reanimated.default.call = () => {}

	return Reanimated
})

jest.mock('react-native/Libraries/Utilities/Platform', () => {
	const Platform = jest.requireActual(
		'react-native/Libraries/Utilities/Platform'
	)
	Platform.__constants = {
		...Platform.constants,
		reactNativeVersion: {
			...Platform.constants.reactNativeVersion,
			minor: 1,
		},
	}
	return Platform
})

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)

beforeAll(() => serverApiTest.listen({ onUnhandledRequest: 'error' }))
afterEach(() => serverApiTest.resetHandlers())
afterAll(() => serverApiTest.close())
