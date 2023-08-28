import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';

const App = () => {
	return (
		<div>
			<Route path="/home">
				<Home> Hello</Home>
			</Route>
		</div>
	);
};

export default App;
