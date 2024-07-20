interface Regiao {
	id: number
	sigla: string
	nome: string
}

interface UF {
	id: number
	sigla: string
	nome: string
	regiao: Regiao
}

interface Mesorregiao {
	id: number
	nome: string
	UF: UF
}

interface Microrregiao {
	id: number
	nome: string
	mesorregiao: Mesorregiao
}

interface RegiaoIntermediaria {
	id: number
	nome: string
	UF: UF
}

interface RegiaoImediata {
	id: number
	nome: string
	'regiao-intermediaria': RegiaoIntermediaria
}

export interface LocationCity {
	id: number
	nome: string
	microrregiao: Microrregiao
	'regiao-imediata': RegiaoImediata
}
