import { MiniCardCoffeeProps } from '@/components/MiniCardCoffee/types'

export const mockCoffees: MiniCardCoffeeProps[] = [
	{
		title: 'Espresso',
		subtitle: 'Strong and bold coffee',
		price: 4.99,
		cover: {
			uri: 'https://i.pinimg.com/736x/10/6e/03/106e0328dbf1155396fb54ff4a07b518.jpg',
		},
		onAddCart: () => console.log('Espresso added to cart'),
	},
	{
		title: 'Cappuccino',
		subtitle: 'Smooth and creamy coffee',
		price: 5.49,
		cover: {
			uri: 'https://i.pinimg.com/736x/36/f3/b4/36f3b4666484c529c788672d82ff8280.jpg',
		},
		onAddCart: () => console.log('Cappuccino added to cart'),
	},
	{
		title: 'Latte',
		subtitle: 'Coffee with steamed milk',
		price: 5.99,
		cover: {
			uri: 'https://i.pinimg.com/564x/d9/d7/6a/d9d76a35a9ff334b2336ef19a3f2b915.jpg',
		},
		onAddCart: () => console.log('Latte added to cart'),
	},
	{
		title: 'Mocha',
		subtitle: 'Coffee with chocolate',
		price: 6.49,
		cover: {
			uri: 'https://i.pinimg.com/564x/60/46/9f/60469fcb6e03b30dc72fb4078355291a.jpg',
		},
		onAddCart: () => console.log('Mocha added to cart'),
	},
	{
		title: 'Americano',
		subtitle: 'Diluted espresso',
		price: 4.49,
		cover: {
			uri: 'https://i.pinimg.com/564x/dd/3a/61/dd3a614fdbb2b2a23cf83d1a91618465.jpg',
		},
		onAddCart: () => console.log('Americano added to cart'),
	},
]
