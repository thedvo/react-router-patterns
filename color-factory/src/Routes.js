import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ColorsList from './ColorsList';
import ColorForm from './ColorForm';
import ColorPage from './ColorPage';

const Routes = () => {
	const initialColors = {
		red: '#FF0000',
		green: '#00FF00',
		blue: '#0000FF',
	};

	const [colors, setColors] = useState(initialColors);

	const addColor = (newColor) => {
		setColors((colors) => ({ ...colors, ...newColor }));
	};

	const renderColor = (props) => {
		const { color } = props.match.params;
		const hex = colors[color];
		return <ColorPage {...props} hex={hex} color={color} />;
	};

	return (
		<Switch>
			{/* Home page where you can see all available colors */}
			<Route exact path="/colors">
				<ColorsList colors={colors} />
			</Route>

			{/* Shows form that will let user add new color */}
			<Route exact path="/colors/new">
				<ColorForm addColor={addColor} />
			</Route>

			{/* Routes to page for individual color */}
			<Route exact path="/colors/:color" render={renderColor}></Route>

			{/* Redirects to colors index page if entered URL does not exist */}
			<Redirect to="/colors" />
		</Switch>
	);
};
export default Routes;
