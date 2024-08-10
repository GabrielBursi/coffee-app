import { ImageSourcePropType } from 'react-native'
import { ButtonProps } from 'react-native-paper'

export type MiniCardCoffeeProps = {
	title: string
	subtitle: string
	price: number
	cover: ImageSourcePropType
	onAddCart?: ButtonProps['onPress']
}
