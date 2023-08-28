import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home';

const App = () => {
	return (
		<div>
			<Route path="./pages/home">
				<Home />
			</Route>
		</div>
	);
};

export default App;
