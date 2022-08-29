export interface IPokemonsState {
	pokemons?: any;
	error: null | string;
	pokemonsInfo?: any;
}

export enum PokemonsActionTypes {
	FETCH_POKEMONS = 'FETCH_POKEMONS',
	FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS',
	FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR',
	FETCH_POKEMONS_INFO_SUCCESS = 'FETCH_POKEMONS_INFO_SUCCESS'
}

interface IFetchPokemonsAction {
	type: PokemonsActionTypes.FETCH_POKEMONS;
}

interface IFetchPokemonsSuccessAction {
	type: PokemonsActionTypes.FETCH_POKEMONS_SUCCESS;
	payload: any[]
}

interface IFetchPokemonsErrorAction {
	type: PokemonsActionTypes.FETCH_POKEMONS_ERROR;
	payload: string
}

interface IFetchPokemonsInfoAction {
	type: PokemonsActionTypes.FETCH_POKEMONS_INFO_SUCCESS;
	payload: {}
}

export type PokemonsActions =
	IFetchPokemonsAction
	| IFetchPokemonsSuccessAction
	| IFetchPokemonsErrorAction
	| IFetchPokemonsInfoAction

interface IMove {
	move: {
		name:string;
	}
}
interface ISprites {
	front_default: string;
}
interface IStat {
	base_stat: number;
	stat: {
		name:string;
	}
}

export interface IPokemon {
	moves: IMove[];
	sprites: ISprites;
	stats: IStat[];
	name: string;
}

