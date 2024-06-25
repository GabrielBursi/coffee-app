export interface IStorageServices {
	GetItem: <T>(key: string) => Promise<T | null>
	SetItem: <T>(key: string, value: T) => Promise<void>
	RemoveItem: (key: string) => Promise<void>
}
