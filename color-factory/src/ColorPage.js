import React from 'react';
import { Link } from 'react-router-dom';

const ColorPage = ({ color, hex, history }) => {
	if (!hex) {
		history.push('/colors');
	}

	return (
		<div className="ColorPage" style={{ backgroundColor: hex }}>
			<p>This is {color}</p>
			<p>Isn't it beautiful?</p>

			<Link to="/colors">Go Back</Link>
		</div>
	);
};

export default ColorPage;
