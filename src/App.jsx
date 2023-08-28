import { Route } from 'react-router-dom';
import Home from './pages/home';

export const App = () => {
	return (
		<div>
			<Route path="/home">
				<Home />
			</Route>
		</div>
	);
};
