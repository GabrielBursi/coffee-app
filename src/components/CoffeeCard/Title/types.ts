import { MD3TypescaleKey } from 'react-native-paper'

/* eslint-disable @typescript-eslint/ban-types */
export type TitleProps = {
	title: string
	subtitle: string
	titleVariant?: TitleVariant
	subtitleVariant?: SubtitleVariant
}

type TextVariants = Extract<
	keyof typeof MD3TypescaleKey,
	'titleMedium' | 'titleSmall' | 'titleLarge'
>
type SubtitleVariant = Extract<TextVariants, 'titleSmall' | 'titleMedium'>
type TitleVariant = Extract<TextVariants, 'titleMedium' | 'titleLarge'>
