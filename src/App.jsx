import { Route } from 'react-router-dom';
import Home from './pages/home';

export const App = () => {
	return (
		<Route path="/Home">
			<Home />
		</Route>
	);
};
