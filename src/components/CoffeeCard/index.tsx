import React, { createContext, PropsWithChildren } from 'react'

import { Title } from './Title'
import { Price } from './Price'
import { Rating } from './Rating'

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

type CoffeeCardType = typeof CoffeeCardCompound

type CompoundedComponent = CoffeeCardType & {
	Title: typeof Title
	Price: typeof Price
	Rating: typeof Rating
}

export const CoffeeCard = CoffeeCardCompound as CompoundedComponent
CoffeeCard.Title = Title
CoffeeCard.Price = Price
CoffeeCard.Rating = Rating
