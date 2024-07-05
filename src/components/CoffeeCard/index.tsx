import React, { createContext, PropsWithChildren } from 'react'

import { Title } from './Title'
import { Price } from './Price'

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
}

export const CoffeeCard = CoffeeCardCompound as CompoundedComponent
CoffeeCard.Title = Title
CoffeeCard.Price = Price
