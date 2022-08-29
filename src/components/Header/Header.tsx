import React, { FC, ChangeEventHandler, MouseEventHandler } from 'react';

import './styles.css'


const searchIconURL = 'https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-search-thin.png'

interface IHeader {
	searchPokemonsHandler: MouseEventHandler<HTMLImageElement>
	onChangeValue: ChangeEventHandler<HTMLInputElement>
	fetchPreviousHandler: () => void
	fetchNextHandler: () => void
}

export const Header: FC<IHeader> = ({ onChangeValue, searchPokemonsHandler, fetchNextHandler, fetchPreviousHandler}) => {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<input
					onChange={onChangeValue}
					placeholder='Search your pokemon'
					className='header__wrapper-search'/>
				<img
					alt='search'
					onClick={searchPokemonsHandler}
					className='header__wrapper-icon'
					src={searchIconURL}
				/>
			</div>
			<div className='header__buttons'>
				<button className='header__buttons-button' onClick={fetchPreviousHandler}>PREV</button>
				<button className='header__buttons-button' onClick={fetchNextHandler}>NEXT</button>
			</div>
		</header>
	);
};
