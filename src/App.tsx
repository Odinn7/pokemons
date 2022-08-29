import React from 'react';
import { MainPage } from "./components/MainPage/MainPage";


export const App = () => {
	return (
		<div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
			<MainPage/>
		</div>
	);
}

