import { combineReducers } from "redux";
import { pokemonsReducer } from "./reducer";


export const rootReducer = combineReducers({
	pokemon: pokemonsReducer
})

export type RootState = ReturnType<typeof rootReducer>
