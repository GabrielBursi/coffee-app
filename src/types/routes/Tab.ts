import { NavigatorScreenParams } from '@react-navigation/native'
import { RootStackParamList } from './Stack'

export type RootTabParamList = {
	HomeStack: NavigatorScreenParams<RootStackParamList>
	Favorites: undefined
	Bag: undefined
	Notifications: undefined
}
