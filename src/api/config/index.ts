import axios from 'axios'
import Config from 'react-native-config'

export const MyAPI = axios.create({
	baseURL: Config.API_URL,
	headers: { 'Content-Type': 'application/json' },
})

export const ApiIBGE = axios.create({
	baseURL: 'https://servicodados.ibge.gov.br/api/v1',
	headers: { 'Content-Type': 'application/json' },
})
