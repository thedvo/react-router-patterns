import React, { useState } from 'react';
import { useHistory } from 'react-router';

const ColorForm = ({ addColor }) => {
	const INITIAL_STATE = {
		name: '',
		hex: '',
	};

	const [formData, setFormData] = useState(INITIAL_STATE);
	const history = useHistory();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor({ [formData.name]: formData.hex });
		setFormData(INITIAL_STATE);
		history.push('/colors');
		// when form is submitted, user is redirected to '/colors'
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Color Name</label>
			<input
				id="name"
				type="text"
				name="name"
				placeholder="Enter color name"
				value={formData.name}
				onChange={handleChange}
			/>
			<label htmlFor="hex">Color Value</label>
			<input
				id="hex"
				type="color"
				name="hex"
				value={formData.hex}
				onChange={handleChange}
			/>

			<button>Add Color</button>
		</form>
	);
};

export default ColorForm;
