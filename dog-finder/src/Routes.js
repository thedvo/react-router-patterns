import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

const Routes = ({ dogs }) => {
	return (
		<Switch>
			{/* Home Page --> shows all dog components */}
			<Route exact path="/dogs">
				<DogList dogs={dogs} />
			</Route>
			{/* Individual Dog Routes */}
			<Route exact path="/dogs/:name">
				<DogDetails dog={dogs} />
			</Route>
			{/* In case route inputted is invalid, reroute to home. */}
			<Redirect to="/dogs" />
		</Switch>
	);
};

export default Routes;
