import { IStorageServices } from '@/types/storage'
export * from './MMKStorage'

export let StorageServices: Readonly<IStorageServices>

export const initializeStorage = (storage: IStorageServices) => {
	StorageServices = storage
}
