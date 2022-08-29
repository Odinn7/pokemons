import { Dispatch } from "redux";
import { PokemonsActions, PokemonsActionTypes } from "../components/types/pokemons";
import axios from "axios";


export const fetchPokemons = (offsetNumber: number) => {
	return async (dispatch: Dispatch<PokemonsActions>) => {
		try {
			dispatch({type: PokemonsActionTypes.FETCH_POKEMONS})
			const namesResponse = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/?offset=${offsetNumber}&limit=32`
			)
			dispatch(
				{type: PokemonsActionTypes.FETCH_POKEMONS_SUCCESS, payload: namesResponse.data})
		} catch (err) {
			dispatch({
				type: PokemonsActionTypes.FETCH_POKEMONS_ERROR,
				payload: 'POKEMONS FETCHING ERROR >>>>>>>>>>>>>>>>>'
			})
		}
	}
}

export const fetchingPokemonsInfo = (moreInfo: string) => {
	return async (dispatch: Dispatch<PokemonsActions>) => {
		try {
			const infoResponse = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${moreInfo}`
			)
			dispatch(
				{type: PokemonsActionTypes.FETCH_POKEMONS_INFO_SUCCESS, payload: infoResponse.data})
			
		} catch (error) {
			console.warn(error, 'ERROR INFOOOOOOOOOOOOOOOOOOO')
		}
	}
}