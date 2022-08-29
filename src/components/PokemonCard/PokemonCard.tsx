import React, { FC, useState } from 'react';
import { CardInfo } from "./CardInfo";

import { fetchingPokemonsInfo } from "../../redux/actionCreators";
import { useTypesSelector } from "../../hooks/useTypeSelector";

import './style.css'
import { useDispatch } from "react-redux";

export interface IPokProps {
	pokemons: {
		name: string
	}
}

export const PokemonCard: FC<IPokProps> = ({pokemons}:IPokProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	
	const {pokemonsInfo} = useTypesSelector(state => state.pokemon)
	
	const dispatch = useDispatch();
	
	const modalOpenHandler = () => {
		setIsModalOpen(!isModalOpen)
		// @ts-ignore
		dispatch(fetchingPokemonsInfo(pokemons.name))
	}
	
	return (
		<div className='pokemonCard' onClick={modalOpenHandler}>
			{
				!isModalOpen ?
				<div className='pokemonCard__info'>
					<h3>{pokemons?.name}</h3>
				</div> : <CardInfo pokemonsInfo={pokemonsInfo}/>
			}
		</div>
	);
};
