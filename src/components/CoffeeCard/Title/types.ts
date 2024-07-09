import { Variants } from '@/types/theme'

/* eslint-disable @typescript-eslint/ban-types */
export type TitleProps = {
	title: string
	subtitle: string
	titleVariant?: TitleVariant
	subtitleVariant?: SubtitleVariant
}

type TextVariants = Extract<
	Variants,
	'titleMedium' | 'titleSmall' | 'titleLarge'
>
type SubtitleVariant = Extract<TextVariants, 'titleSmall' | 'titleMedium'>
type TitleVariant = Extract<TextVariants, 'titleMedium' | 'titleLarge'>
