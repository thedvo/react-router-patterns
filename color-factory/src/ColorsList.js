import React from 'react';
import { Link } from 'react-router-dom';

const ColorsList = ({ colors }) => {
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
			</h3>

			{/* section showing available colors */}
			<div className="ColorsList-avail-colors">
				<p>Please select a color.</p>
				<ul>{colorLinks}</ul>
			</div>
		</div>
	);
};

export default ColorsList;
