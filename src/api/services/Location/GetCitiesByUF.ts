import { ApiIBGE } from '@/api/config'
import { LocationCity } from '@/types/api'

export const GetCitiesByUF = async (
	ufId: number
): Promise<LocationCity[] | Error> => {
	try {
		const { data } = await ApiIBGE<LocationCity[]>(
			`/localidades/estados//${ufId}/municipios`
		)
		return data
	} catch (error) {
		return new Error(`Houve um erro ao buscar as cidades.`)
	}
}
