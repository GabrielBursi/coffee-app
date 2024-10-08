import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { RootStackParamList, RootTabParamList } from '../routes'

export type HomeScreenProps = CompositeScreenProps<
	StackScreenProps<RootStackParamList, 'Home'>,
	BottomTabScreenProps<RootTabParamList>
>
