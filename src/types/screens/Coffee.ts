import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { RootStackParamList, RootTabParamList } from '../routes'

export type CoffeeScreenProps = CompositeScreenProps<
	StackScreenProps<RootStackParamList, 'Coffee'>,
	BottomTabScreenProps<RootTabParamList>
>
