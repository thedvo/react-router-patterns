import React from 'react';
import { Link } from 'react-router-dom';

const ColorsList = ({ colors }) => {
	// use Object.keys to take the color names from the object which contains the data
	// for each of those keys, it will make a list item with a link which a user can click.
	const colorLinks = Object.keys(colors).map((color) => (
		<li key={color}>
			<Link to={`/colors/${color}`}>{color}</Link>
		</li>
	));

	return (
		<div className="ColorsList">
			<h1>Welcome to the Color Factory</h1>
			<h3>
				<Link to="/colors/new">Add a Color</Link>
				{/* links user to the form to add a new color */}
			</h3>

			{/* section showing available colors */}
			<div className="ColorsList-avail-colors">
				<p>Please select a color.</p>
				<ul>{colorLinks}</ul>
				{/* takes the variable we defined above which maps all of the colors */}
			</div>
		</div>
	);
};

export default ColorsList;
