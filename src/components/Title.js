import React from 'react'



// the empty div acts as a hr

export default function Title({title}) {

	return (

		<div className="section-title">
			<h4>{title}</h4>
			<div></div>
		</div>

	)
}