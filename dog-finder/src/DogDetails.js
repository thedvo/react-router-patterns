import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DogDetails.css';

/** shows all of the info about a single dog */

const DogDetails = ({ dog }) => {
	// take the dog name from the URL parameter
	const { name } = useParams();

	// if there is a name, check to see if it is in the defaultProp data
	if (name) {
		const currDog = dog.find(
			(dog) => dog.name.toLowerCase() === name.toLowerCase()
		);

		// if confirmed, render the dog details.
		return (
			<div className="DogDetails">
				{' '}
				<div>
					<img src={currDog.src} alt={currDog.name} />

					<h1>{currDog.name}</h1>
					<h3>{currDog.age} years old</h3>
					<ul>
						{currDog.facts.map((fact, i) => (
							<li key={i}>{fact}</li>
						))}
					</ul>
				</div>
				<Link to="/dogs">
					<button>Go Back</button>
				</Link>
			</div>
		);
	}
};

export default DogDetails;
