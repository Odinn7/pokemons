import {
	IPokemonsState, PokemonsActions,
	PokemonsActionTypes
} from "../../components/types/pokemons";


const initialState: IPokemonsState = {
	pokemons: {},
	error: null,
	pokemonsInfo: {}
}

export const pokemonsReducer = (state = initialState, action: PokemonsActions): IPokemonsState => {
	switch (action.type) {
		case PokemonsActionTypes.FETCH_POKEMONS:
			return {
				...state,
				pokemons: [],
				error: null
			}
		
		case PokemonsActionTypes.FETCH_POKEMONS_SUCCESS:
			return {
				...state,
				pokemons: action.payload,
				error: null
			}
		
		case PokemonsActionTypes.FETCH_POKEMONS_ERROR:
			return {
				...state,
				pokemons: [],
				error: action.payload
			}
			
		case PokemonsActionTypes.FETCH_POKEMONS_INFO_SUCCESS:
			return {
				...state,
				pokemonsInfo: action.payload,
				error: null
			}
		default:
			return state
	}
}