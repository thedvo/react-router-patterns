import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({ dogs }) => {
	// Map out the individual dog links for the Nav Bar.
	const links = dogs.map((dog) => (
		<NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
			{dog.name}
		</NavLink>
	));
	// will return a navbar consisting of links to Home + 4 individual dogs
	return (
		<nav>
			<NavLink exact to="/dogs">
				Home
			</NavLink>
			{links}
		</nav>
	);
};

export default Nav;
