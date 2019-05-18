import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'


// get all unique values for parameters to display in the form, Set only accept unique values
const getUnique = (item,value) => {
	return [...new Set(item.map(item => item[value]))]
}



export default function RoomsFilter({rooms}) {


/*
label tag in the form associates the text to the input, for display purposes
select tag = scrolling menu

*/

	const context = useContext(RoomContext);

	const {
		handleChange, 
		type, 
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets
	} = context;


	let types = getUnique(rooms,'type');

	// add the all option
	types = ['all',...types];

	// map tp JSX
	types = types.map((item, index) => {
		return <option value={item} key={index}>{item}</option>
	})


	let people = getUnique(rooms,'capacity');

	people = people.map((item,index) => {
		return <option key={index} value={item}>{item}</option>
	})




	return (


		<section className="filter-container">
			<Title title="search-rooms" />

			<form className="filter-form">

				<div className="form-group">
					<label htmlFor="type">room type</label>
					<select
						name="type"
						id="type"
						value={type}
						className="form-control"
						onChange={handleChange}
					>{types}</select>
				</div>

				<div className="form-group">
					<label htmlFor="capacity">Guests</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className="form-control"
						onChange={handleChange}
					>{people}</select>
				</div>

				<div className="form-group">
					<label htmlFor="price">room price ${price}</label>
					<input
						type="range"
						name="price"
						id="price"
						min={minPrice}
						max={maxPrice}
						value={price}
						className="form-control"
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="size">room size</label>
						<div className="size-inputs">
							<input
								type="number"
								name="minSize"
								id="size" 
								value={minSize}
								className="form-control"
								onChange={handleChange}
							></input>

							<input
								type="number"
								name="maxSize"
								id="size"
								value={maxSize}
								className="form-control"
								onChange={handleChange}
							/>
						</div>
				</div>

				<div className="form-group">
					
						<div className="single-extra">
							<label htmlFor="breakfast">breakfast</label>
							<input
								type="checkbox"
								name="breakfast"
								id="breakfast" 
								checked={breakfast}
								className="form-control"
								onChange={handleChange}
							/>

							<label htmlFor="pets">pets</label>
							<input
								type="checkbox"
								name="pets"
								id="pets"
								checked={pets}
								className="form-control"
								onChange={handleChange}
							/>
						</div>
				</div>












			</form>
		</section>

	)

}