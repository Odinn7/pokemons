import React, { FC, useEffect, useState } from 'react';
import { Header } from "../Header/Header";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { useDispatch } from "react-redux";
import { fetchPokemons } from "../../redux/actionCreators";
import { useTypesSelector } from "../../hooks/useTypeSelector";

import './style.css'


export const MainPage: FC = () => {
	const [inputsValue, setInputValue] = useState('')
	const [filtered, setFiltered] = useState([])
	const [nextPage, setNextPage] = useState(0)
	
	const dispatch = useDispatch();
	const {pokemons} = useTypesSelector(state => state.pokemon);
	
	useEffect(() => {
		// @ts-ignore
		dispatch(fetchPokemons())
	}, [])
	
	const fetchNextHandler = () => {
		setNextPage(nextPage + 32)
		// @ts-ignore
		dispatch(fetchPokemons(nextPage))
	}
	const fetchPreviousHandler = () => {
		{
			nextPage > 32 ? setNextPage(nextPage - 32) : setNextPage(0)
		}
		// @ts-ignore
		dispatch(fetchPokemons(nextPage))
	}
	
	const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}
	const searchPokemonsHandler = () => {
		const filter = pokemons?.results.filter((item: any) => item.name.includes(inputsValue))
		setFiltered(filter)
	}
	
	return (
		<div className='mainPage'>
			<div>
				<Header
					onChangeValue={onChangeValue}
					searchPokemonsHandler={searchPokemonsHandler}
					fetchNextHandler={fetchNextHandler}
					fetchPreviousHandler={fetchPreviousHandler}
				/>
			</div>
			<div>
				<div className='mainPage__wrapper'>
					{
						inputsValue && filtered.length ?
						filtered.map((poke: any) =>
							<PokemonCard
								pokemons={poke}
							/>
						)
													   :
						pokemons?.results?.map((pokemons: any) =>
							<PokemonCard
								pokemons={pokemons}
							/>
						)
					}
				</div>
			</div>
		
		</div>
	);
};
