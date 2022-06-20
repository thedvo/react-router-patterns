import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

// maps the dog info onto the homepage w/ images and links

const DogList = ({ dogs }) => {
	// map out each individual dog (d) with an index (i).
	// providing info on Image Source, Image Alt, and Name for routing
	const dawgs = dogs.map((d, i) => (
		<div key={i}>
			<img src={d.src} alt={d.name} />
			<h2>
				<Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
			</h2>
		</div>
	));

	// Renders Home Page w/ heading and dog list component
	return (
		<div>
			<h1>WE HAVE DOGS!</h1>
			<p>CLICK ON A DOG FOR MORE INFO</p>
			<div>{dawgs}</div>
		</div>
	);
};

export default DogList;
