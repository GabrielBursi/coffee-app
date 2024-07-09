import { Colors, Variants } from '@/types/theme'

export type RatingProps = {
	rating: number
	max?: number
	totalRanking?: number
	size?: TextVariants
	color?: Color
}

type TextVariants = Extract<Variants, 'titleMedium' | 'titleSmall'>
type Color = Extract<Colors, 'white' | 'primaryText'>
