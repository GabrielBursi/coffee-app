import { CoffeeContext } from '@/components'
import { useContext, useDebugValue } from 'react'

export const useCoffeeContext = () => {
	const context = useContext(CoffeeContext)
	useDebugValue('useCoffeeContext', () => context)

	if (!context)
		throw new Error('useCoffeeContext must be wrapped inside of a provider.')

	return context
}
