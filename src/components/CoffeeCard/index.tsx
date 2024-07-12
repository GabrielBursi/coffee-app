import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useDebugValue,
} from 'react'

import { Title } from './Title'
import { Price } from './Price'
import { Rating } from './Rating'
import { Action } from './Action'

interface CoffeeContext {
	teste: string
}

export const CoffeeContext = createContext<CoffeeContext | null>(null)

const CoffeeCardCompound = ({ children }: PropsWithChildren) => {
	return (
		<CoffeeContext.Provider value={{ teste: 'oi' }}>
			{children}
		</CoffeeContext.Provider>
	)
}

const useCoffeeContext = () => {
	const context = useContext(CoffeeContext)
	useDebugValue('useCoffeeContext', () => context)

	if (!context)
		throw new Error('useCoffeeContext must be wrapped inside of a provider.')

	return context
}

type CoffeeCardType = typeof CoffeeCardCompound

type CompoundedComponent = CoffeeCardType & {
	Title: typeof Title
	Price: typeof Price
	Rating: typeof Rating
	Action: typeof Action
	useCoffee: typeof useCoffeeContext
}

export const CoffeeCard = CoffeeCardCompound as CompoundedComponent
CoffeeCard.Title = Title
CoffeeCard.Price = Price
CoffeeCard.Rating = Rating
CoffeeCard.Action = Action
CoffeeCard.useCoffee = useCoffeeContext
