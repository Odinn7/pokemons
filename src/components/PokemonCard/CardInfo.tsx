import React, { FC } from 'react';
import { IPokemon } from "../types/pokemons";

import './style.css'


interface CardInfoProps {
	pokemonsInfo: IPokemon
}

export const CardInfo: FC<CardInfoProps> = ({pokemonsInfo}) => {
	return (
		<div className='cardInfo'>
			<div className='cardInfo__nameIcon'>
				<div className='cardInfo__nameIcon__nameWrapper'>
					<h1 className='cardInfo__nameIcon__nameWrapper-name'>
						{pokemonsInfo?.name}
					</h1>
				</div>
				<div className='cardInfo__nameIcon__iconWrapper'>
					<img alt='pokemonIcon' className='cardInfo__nameIcon__iconWrapper-icon'
						 src={pokemonsInfo?.sprites?.front_default}/>
				</div>
			</div>
			<div className='cardInfo__movesStats'>
				<div className='cardInfo__movesStats__moves'>
					<ul className='cardInfo__movesStats__moves-move'>
						<h3>Moves</h3>
						{
							pokemonsInfo?.moves?.splice(0, 8).map((item: any) =>
							<li>{item?.move.name}</li>
						)}
					</ul>
				</div>
				<div className='cardInfo__movesStats__stats'>
					<ul className='cardInfo__movesStats__stats-stat'>
						<h3>Stats</h3>
						{
							pokemonsInfo?.stats?.map(
							(item: any) =>
								<li>{item.stat?.name}: {item.base_stat}</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

